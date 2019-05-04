import React from 'react'
import NavbarDash from './NavbarDash'
import { db } from '../../Firebase'
import { logOut } from './index'
import { SemipolarSpinner } from 'react-epic-spinners'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Barcode (props) {
    let [data, setData] = React.useState(null)
    let [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        const fetchUserData = () => {
            db.collection('users').doc(props.user[1] || props.user.uid).collection('scannedBarcodes').get()
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

    const deleteBarcode = async id => {
        await db.collection('users').doc(props.user[1] || props.user.uid).collection('scannedBarcodes').doc(id).delete()
        toast.success('👍 Deleted successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        })
        document.getElementById(id).style.display = 'none'

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
                <h1 className="welcome animated fadeIn">Here&#039;s what you&#039;ve scanned so far...</h1> <br/>
                {data.length > 0 ? data.sort((a, b) => b.timestamp.substring(4).localeCompare(a.timestamp.substring(4))).map(img => (
                    <div id={img.id} key={img.id}>
                        <div className="col-md-3 col-sm-12">
                            <img src={img.imageFile} className="labelled-image" alt="scanned barcodes"/>
                            <div className="labels animated fadeIn" style={{textAlign: 'center'}}>
                                {img.info.includes('@') ? 
                                    <a
                                     href={`mailto:${img.info}`} 
                                     style={{color: '#2522a6', fontSize: 14}} 
                                     alt={img.info}>{img.info}</a> : 
                                    (img.info.includes('.') || img.info.includes('https://') || img.info.includes('www.')) ? 
                                    <a
                                     href={img.info.includes('www.') ? `https://${img.info}` : img.info} 
                                     style={{color: '#2522a6', fontSize: 14}} 
                                     alt={img.info}
                                     target="_blank"
                                     rel="noopener noreferrer">{img.info}</a> : 
                                    !isNaN(img.info) ? 
                                    <a
                                     href={`tel:${img.info}`} 
                                     style={{color: '#2522a6', fontSize: 14}} 
                                     alt={img.info}>
                                    {img.info}
                                    </a> : 
                                    img.info
                                } <br/>
                                <p className="animated fadeIn" style={{
                                    textAlign: 'center', 
                                    color: '#Bb5485',
                                    fontSize: 14,
                                    cursor: 'pointer'
                                    }}
                                 onClick={() => deleteBarcode(img.id)}
                                >DELETE</p>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="empty animated fadeIn">
                        <img src="https://gph.to/2D6Yuqg" alt="Nothing to see here"/> <br/>
                        {window.screen.width < 768 && (
                            <p style={{textAlign: 'center'}} className="about-site">
                                <Link to="/dashboard" style={{color: '#2522a6'}}>&lt;- Back To Dashboard</Link>
                            </p>
                        )}
                    </div>
                )}
            </div></div>
        </div>
    )
}