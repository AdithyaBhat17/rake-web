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
                    <div className="col-md-4 col-sm-12">
                        <Link to='/dashboard/recognized-text'><img src={text} alt="Recognized Text" className="feature-icon"/></Link> <br/> <br/>
                        <div className="feature-link">
                            <Link to="/dashboard/recognized-text">Recognized Text -></Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Link to='/dashboard/scanned-barcodes'><img src={barcode} alt="Scanned Barcodes" className="feature-icon"/></Link> <br/> <br/>
                        <div className="feature-link">
                            <Link to="/dashboard/scanned-images">Scanned Barcodes -></Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Link to='/dashboard/labelled-images'><img src={image} alt="Scanned Barcodes" className="feature-icon"/></Link> <br/> <br/>
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