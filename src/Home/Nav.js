import React from 'react';

export default function Nav() {
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
                <a className="navbar-brand animated fadeInDown" href="/">rake</a>
                </div>
                <div className="collapse navbar-collapse animated fadeInDown" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right animated fadeIn">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Login</a></li>
                        {/* <li><a className="get-app"  href="#">Get App</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}