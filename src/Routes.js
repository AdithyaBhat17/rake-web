import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import config from './Firebase'

import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Login/Signup'
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard';

export default function Routes(props) {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        config.auth().onAuthStateChanged(user => {
            if(user) {
                setAuthenticated(true)
                setUser(user)
            } else {
                setAuthenticated(false)
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