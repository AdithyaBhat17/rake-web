import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import config from './Firebase'

import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Login/Signup'
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard';

export default function Routes(props) {
    const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem('authenticated')))
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')))

    useEffect(() => {
        config.auth().onAuthStateChanged(user => {
            if(user) {
                let userDetails = []
                userDetails.push(user.email, user.uid, user.displayName, user.photoURL)
                console.log(userDetails)
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
                <Route exact path="/login" component={Login}/>
                <Route exact path="/join" component={Signup}/>
                <PrivateRoute
                 exact 
                 path="/dashboard" 
                 component={Dashboard} 
                 authenticated={authenticated}
                 user={user}
                />
            </React.Fragment>
        </Router>
    )
}