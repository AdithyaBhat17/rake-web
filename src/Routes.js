import React, { useState, useEffect, lazy, Suspense } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import config from './Firebase'

import PrivateRoute from './PrivateRoute'
import Home from './components/Home'
import { SemipolarSpinner } from 'react-epic-spinners'

const Login = lazy(() => import('./components/Home/Login'))
const About = lazy(() => import('./components/About'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const LabelledImages = lazy(() => import('./components/Dashboard/LabelledImages'))
const Barcode = lazy(() => import('./components/Dashboard/Barcode'))
const RecognizedText = lazy(() => import('./components/Dashboard/RecognizedText'))
const Text = lazy(() => import('./components/Dashboard/Text'))

export default function Routes(props) {
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

    const loading = () => (
        <SemipolarSpinner color='#2522a6' style={{display: 'block', margin: '45vh auto'}} />
    )

    return (
        <Suspense fallback={loading}>
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={() => <About />}/>
                    <Route exact path="/login" component={(props) => <Login {...props} />} />
                    <PrivateRoute
                     exact 
                     path="/dashboard" 
                     component={(props) => <Dashboard {...props} />} 
                     authenticated={authenticated}
                     user={user}
                    />
                    <PrivateRoute
                     exact
                     path="/dashboard/recognized-text"
                     authenticated={authenticated}
                     user={user}
                     component={(props) => <RecognizedText {...props} />}
                    />
                    <PrivateRoute
                     exact
                     path="/dashboard/recognized-text/:id"
                     authenticated={authenticated}
                     user={user}
                     component={(props) => <Text {...props} />}
                    />
                    <PrivateRoute
                     exact
                     path="/dashboard/scanned-barcodes"
                     authenticated={authenticated}
                     user={user}
                     component={(props) => <Barcode {...props} />}
                    />
                    <PrivateRoute
                     exact
                     path="/dashboard/labelled-images"
                     authenticated={authenticated}
                     user={user}
                     component={(props) => <LabelledImages {...props} />}
                    />
                </React.Fragment>
            </Router>
        </Suspense>
    )
}