import React from 'react'
import NavbarDash from './NavbarDash'
import { logOut } from '.' // test this later
import { db } from '../../Firebase'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export const copyToClipboard = (text) => {
    let textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy') ? 
    toast.success('🎉 Copied to Clipboard', {
        autoClose: 2000,
        position: "top-center"
    }) : 
    toast.error('😢 Copying to Clipboard failed, Try again', {
        autoClose: 2000,
        position: "top-center"
    })

    document.body.removeChild(textArea)
}

const Text = (props) => {
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        db.collection('users')
        .doc(props.user[1] || props.user.uid).collection('recognizedText').doc(props.match.params.id).get()
        .then(doc => console.log(doc.data()) || setData(doc.data()))
    }, [])

    return (
        <div>
            <NavbarDash logOut={() => logOut(props)} />
            <ToastContainer />
            <div className="container">
                {data && data.blocks.map((block, index) => (
                    <p key={index} className="text">
                        <span style={{maxWidth: '90%'}}>{block}</span>
                        <span onClick={() => copyToClipboard(block)} style={{opacity: 0.9, cursor: 'pointer'}}>
                            <i className="fa fa-copy"></i>
                        </span>
                    </p>
                ))} <br/>
                {window.screen.width < 768 && (
                    <p style={{textAlign: 'center'}} className="about-site">
                        <Link to="/dashboard" style={{color: '#2522a6'}}>&lt;- Back To Dashboard</Link>
                    </p>
                )} <br/>
            </div>
        </div>
    )
}

export default Text