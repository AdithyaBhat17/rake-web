import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import config from './Firebase'

import Home from './components/Home'
import About from './components/About'
import PrivateRoute from './PrivateRoute'
import Dashboard from './components/Dashboard'
import LabelledImages from './components/Dashboard/LabelledImages'
import Barcode from './components/Dashboard/Barcode'
import RecognizedText from './components/Dashboard/RecognizedText'
import Login from './components/Home/Login'
import Text from './components/Dashboard/Text'

export default function Routes() {
    const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem('authenticated')))
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')))

    useEffect(() => {
        config.auth().onAuthStateChanged(user => {
            if(user) {
                let userDetails = []
                userDetails.push(user.email, user.uid, user.displayName, user.photoURL)
                // console.log(userDetails)
                localStorage.setItem('authenticated', JSON.stringify(true))
                setAuthenticated(true)
                localStorage.setItem('currentUser', JSON.stringify(userDetails))
                setUser(user)
            } else {
                localStorage.setItem('authenticated', JSON.stringify(false))
                setAuthenticated(false)
                localStorage.removeItem('currentUser')
                setUser(null)
            }
        })
    })

    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/login" component={Login} />
                <PrivateRoute
                 exact 
                 path="/dashboard" 
                 component={Dashboard} 
                 authenticated={authenticated}
                 user={user}
                />
                <PrivateRoute
                 exact
                 path="/dashboard/recognized-text"
                 authenticated={authenticated}
                 user={user}
                 component={RecognizedText}
                />
                <PrivateRoute
                 exact
                 path="/dashboard/recognized-text/:id"
                 authenticated={authenticated}
                 user={user}
                 component={Text}
                />
                <PrivateRoute
                 exact
                 path="/dashboard/scanned-barcodes"
                 authenticated={authenticated}
                 user={user}
                 component={Barcode}
                />
                <PrivateRoute
                 exact
                 path="/dashboard/labelled-images"
                 authenticated={authenticated}
                 user={user}
                 component={LabelledImages}
                />
            </React.Fragment>
        </Router>
    )
}