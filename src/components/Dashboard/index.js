import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import firebase from '../../Firebase'
import NavbarDash from './NavbarDash'

import text from '../../Assets/dashboard/text.svg'
import barcode from '../../Assets/dashboard/barcode.svg'
import image from '../../Assets/dashboard/image.svg'

export const logOut = (props) => {
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

    const { user } = props

    return(
        <div>
            <NavbarDash logOut={() => logOut(props)}/>
            <div className="container-fluid dashboard">
                <h1 className="welcome">Welcome, {user.displayName}!</h1> <br/> <br/>
                <div className="row">
                    <div className="col-md-2 col-sm-12">
                        <img src={text} alt="Recognized Text" className="feature-icon"/> <br/> <br/>
                        <div className="feature-link">
                            <a href="#">Recognized Text -></a>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <img src={barcode} alt="Scanned Barcodes" className="feature-icon"/> <br/> <br/>
                        <div className="feature-link">
                            <a href="#">Scanned Barcodes -></a>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <img src={image} alt="Scanned Barcodes" className="feature-icon"/> <br/> <br/>
                        <div className="feature-link">
                            <Link to="/dashboard/labelled-images">Labelled Images -></Link>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default withRouter(Dashboard)