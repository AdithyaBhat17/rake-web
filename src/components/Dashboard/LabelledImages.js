import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash';
import { logOut } from './index';
import { SemipolarSpinner } from 'react-epic-spinners'
import { Link } from 'react-router-dom'
import Clipboard from 'react-clipboard.js'
import { toast, ToastContainer } from 'react-toastify'
import searchAPI from '../../utils'
import { Dialog } from '@auth0/cosmos'
import SearchResults from './SearchResults';

const LabelledImages = (props) => {
    let [data, setData] = React.useState(null)
    let [loading, setLoading] = React.useState(true)
    const [openDialog, setOpenDialog] = React.useState(false)
    let [searchResults, setSearchResults] = React.useState(null)

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
        const search_results = await searchAPI({image_url})
        setSearchResults(search_results)
    }

    const success = () => {
        toast.success('🎉 Copied to clipboard', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        })
    }

    const download = (image) => {
        let link = document.createElement('a')
        link.href = image
        link.download = 'image.png'
        link.rel = 'noopener noreferrer'
        link.target = '_blank'
        link.click()
        // document.
    }

    const delete_img = (id) => {
        toast.success('👍 Deleted successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        })
        document.getElementById(id).style.display = 'none'
        // db.collection('users').doc(props.user[1] || props.user.uid).collection('labelledImages').doc(id).delete()
    }

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
                    {data.length > 0 ? data.map(img => (
                        <div id={img.id} key={img.id}>
                            <div className="col-md-3 col-sm-12">
                                <img src={img.imageFile} className="labelled-image" alt="labelled image"/>
                                <div className="labels animated fadeIn">
                                    {img.labels.map((label, index) => index < 5 && (
                                        <div key={index} className="label">{label}</div>
                                    ))}
                                </div>
                                <div className="flex-buttons animated fadeIn">
                                    <i className="fa fa-search" onClick={() => searchImage(img.imageFile)}></i>
                                    <Clipboard onSuccess={success} data-clipboard-text={img.imageFile}>
                                        <i className="fa fa-share-alt text"></i>
                                    </Clipboard>
                                    <i className="fa fa-download" onClick={() => download(img.imageFile)}></i>
                                    <i className="fa fa-trash-alt" onClick={() => delete_img(img.id)}></i>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="empty">
                            <img src="https://gph.to/2D6Yuqg" alt="Nothing to see here"/> <br/>
                            {window.screen.width < 768 && (
                                <p style={{textAlign: 'center'}} className="about-site">
                                    <Link to="/dashboard" style={{color: '#2522a6'}}>&lt;- Back To Dashboard</Link>
                                </p>
                            )}
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
                    {(searchResults === null || searchResults.length === 0) ?
                        <SemipolarSpinner color='#2522a6' style={{display: 'block', margin: '15vh auto'}} /> : 
                        <SearchResults data={searchResults} />
                    }
                </Dialog>
            </div>
        </div>
    )
}

export default LabelledImages