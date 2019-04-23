import React from 'react'
import NavbarDash from './NavbarDash'
import { logOut } from '.' // test this later
import { db } from '../../Firebase'
import { Link } from 'react-router-dom'

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
            <div className="container">
                {data && data.blocks.map((block, index) => (
                    <p key={index} className="text">
                        <span style={{maxWidth: '90%'}}>{block}</span>
                        <span style={{opacity: 0.9, cursor: 'pointer'}}>
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