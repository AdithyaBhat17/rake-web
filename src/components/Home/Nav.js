import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/rakelogoblack.png'

const Nav = () => (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed animated fadeIn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand animated fadeIn" title="rake" to="/">
                <img className="logo" src={logo} alt="rake"/>
            </Link>
            </div>
            <div className="collapse navbar-collapse animated fadeIn" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right animated fadeIn">                        
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>         
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav