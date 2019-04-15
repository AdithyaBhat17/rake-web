import React from 'react'
import logo from '../../Assets/rakelogowhite.png'
import { Link } from 'react-router-dom'

export default function NavbarDash({logOut}) {
    return (
        <nav className="navbar navbar-default navbar-dashboard">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed animated fadeIn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand animated fadeIn" href="/">
                        <img className="logo" src={logo} alt="rake"/>
                    </a>
                </div>
                <div className="collapse navbar-collapse animated fadeIn" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right animated fadeIn">                        
                        <li><a style={{cursor: 'pointer'}} href="javascript:void(0)" className="lognav" onClick={logOut}>Logout</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right animated fadeIn">                        
                        <li><Link style={{cursor: 'pointer'}} to='/dashboard' className="lognav">Dashboard</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}