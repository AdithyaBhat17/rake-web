import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function AboutNav({noNav}) {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand animated fadeInDown" to="/">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
}