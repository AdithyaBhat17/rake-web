import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/rakelogoblack.png';

export default function Nav({noNav}) {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed animated fadeInDown" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand animated fadeInDown" href="/">
                    <img className="logo" src={logo} alt="rake"/>
                </a>
                </div>
                <div className="collapse navbar-collapse animated fadeInDown" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right animated fadeIn">                        
                        <li><Link to="/about">About Us</Link></li>
                        <li><a href="/">Login</a></li>         
                    </ul>
                </div>
            </div>
        </nav>
    );
}