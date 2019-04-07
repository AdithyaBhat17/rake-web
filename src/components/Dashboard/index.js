import React from 'react'
import { withRouter } from 'react-router-dom'

import firebase, { db } from '../../Firebase'
import NavbarDash from './NavbarDash'

import text from '../../Assets/dashboard/text.svg'
import barcode from '../../Assets/dashboard/barcode.svg'
import image from '../../Assets/dashboard/image.svg'
import arrow_right from '../../Assets/dashboard/arrow-right.svg'

const logOut = (props) => {
    try {
        firebase
        .auth()
        .signOut()
        .then(() => props.history.push('/'))
    } catch (err) {
        alert(err)
    }
}

const Dashboard = (props) => {
    let [data, setData] = React.useState([])
    React.useEffect(() => {
        const fetchUserData = () => {
            // TEST FOR TEXT RECOGNITION
            db.collection('users').doc(props.user[1] || props.user.uid).collection('recognizedText').get()
            .then(async collection => {
                let i = collection.docs.map(doc => doc.data())        
                await setData(i)
                console.log(data)
            })
        }

        fetchUserData()
        console.log(data)
    }, [JSON.stringify(data)])

    const { user } = props

    console.log(user.displayName)
    return(
        <div>
            <NavbarDash logOut={() => logOut(props)}/>
            <div className="container-fluid dashboard">
                <h1 className="welcome">Welcome, {user.displayName}!</h1> <br/> <br/>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img src={text} alt="Recognized Text" className="feature-icon"/> <br/> <br/>
                        <div className="feature-link">
                            <a href="#">Recognized Text -></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={barcode} alt="Scanned Barcodes" className="feature-icon"/> <br/> <br/>
                        <div className="feature-link">
                            <a href="#">Scanned Barcodes -></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={image} alt="Scanned Barcodes" className="feature-icon"/> <br/> <br/>
                        <div className="feature-link">
                            <a href="#">Labelled Images -></a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default withRouter(Dashboard)