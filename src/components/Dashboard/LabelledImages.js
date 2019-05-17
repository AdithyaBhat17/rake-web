import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash'
import { logOut } from './index'
import { SemipolarSpinner } from 'react-epic-spinners'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import searchAPI from '../../utils'
import { Dialog } from '@auth0/cosmos'
import SearchResults from './SearchResults'
import { copyToClipboard } from './Text'

const LabelledImages = (props) => {
    let [data, setData] = React.useState(null)
    let [loading, setLoading] = React.useState(true)
    const [openDialog, setOpenDialog] = React.useState(false)
    let [searchResults, setSearchResults] = React.useState(null)
    let [labelSearch, setLabelSearch] = React.useState(false)

    React.useEffect(() => {
        const fetchUserData = () => {
            db.collection('users').doc(props.user[1] || props.user.uid).collection('labelledImages').get()
            .then(async collection => {
                let i = collection.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }) 
                await setData(i)
            })
        }

        fetchUserData()
        data && setLoading(false)
    }, [JSON.stringify(data)])

    const searchImage = async image_url => {
        setOpenDialog(true)
        const search_results = await searchAPI({image_url}).catch(err => {return})
        console.log(search_results)
        setSearchResults(search_results)
    }

    const download = (image, timestamp) => {
        fetch('https://cors-anywhere.herokuapp.com/' + image)
        .then(response => response.blob())
        .then(blob => {
            if (window.navigator && window.navigator.msSaveOrOpenBlob) // for IE
                window.navigator.msSaveOrOpenBlob(blob, timestamp)
            else {
                let a = document.createElement('a')
                a.href = URL.createObjectURL(blob)
                document.body.appendChild(a)
                a.download = timestamp
                a.click()
                document.body.removeChild(a)
            }
        })
    }

    const closeModalWithAlert = () => {
        alert('Server Error! Please try another keyword.')
        setOpenDialog(false)
        setSearchResults(null)
    }

    const label_search = async label => {
        setOpenDialog(true)
        const search_results = await searchAPI({q: label}, 'labelsearch')
        setLabelSearch(true)
        console.log(search_results)
        setSearchResults(search_results)
    }

    const delete_img = async id => {
        await db.collection('users').doc(props.user[1] || props.user.uid).collection('labelledImages').doc(id).delete()
        toast.success('👍 Deleted successfully!', {
            position: "top-center",
            autoClose: 2000
        })
        document.getElementById(id).style.display = 'none'    }

    if(loading)
        return (
            <SemipolarSpinner color='#2522a6' style={{display: 'block', margin: '45vh auto'}} />
        )

    return (
        <div>
            <NavbarDash logOut={() => logOut(props)} /> <br/>
            <ToastContainer />
            <div className="container" style={{margin: '-45px auto 0'}}>
                <div className="row">
                    <h1 className="welcome animated fadeIn">Here&#039;s what you&#039;ve labelled so far...</h1> <br/>
                    {data.length > 0 ? data.sort((a, b) => b.timestamp.substring(4).localeCompare(a.timestamp.substring(4))).map(img => (
                        <div id={img.id} className="image-div" key={img.id}>
                            <div className="col-md-3 col-sm-12">
                                <img src={img.imageFile} className="labelled-image" alt="labelled images"/>
                                <div className="labels animated fadeIn">
                                    {img.labels.map((label, index) => index < 5 && (
                                        <div
                                         key={index} 
                                         style={{cursor: 'pointer'}} 
                                         onClick={() => label_search(label)} 
                                         className="label">
                                         {label}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-buttons animated fadeIn">
                                    <i className="fa fa-search" onClick={() => searchImage(img.imageFile)}></i>
                                    <i onClick={() => copyToClipboard(img.imageFile)} className="fa fa-share-alt"></i>
                                    <i className="fa fa-download" onClick={() => download(img.imageFile, img.timestamp)}></i>
                                    <i className="fa fa-trash-alt" onClick={() => delete_img(img.id)}></i>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="empty">
                            <img src="https://gph.to/2D6Yuqg" alt="Nothing to see here"/> <br/>
                        </div>
                    )}
                </div>
                <Dialog 
                 open={openDialog}
                 title="Search Results"
                 onClose={() => {
                    setOpenDialog(false)
                    setSearchResults(null)
                 }}
                >
                    {
                        searchResults === undefined ? closeModalWithAlert() :
                        (searchResults === null || searchResults.length === 0) ?
                        <SemipolarSpinner color='#2522a6' style={{display: 'block', margin: '15vh auto'}} /> : 
                        <SearchResults data={searchResults} labelSearch={labelSearch} />
                    }
                </Dialog>
            </div> <br/> <br/>
            {window.screen.width < 768 && (
                <p style={{textAlign: 'center'}} className="about-site">
                    <Link to="/dashboard" style={{color: '#bb5485'}}>&lt;- Back To Dashboard</Link>
                </p>
            )} <br/>
        </div>
    )
}

export default LabelledImages