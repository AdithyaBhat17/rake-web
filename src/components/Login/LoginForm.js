import React from 'react';
import { Link } from 'react-router-dom';
import searchicon from '../../Assets/search.svg'; 

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className="container">
                <form className="form animated fadeIn">
                    <h2 className="tagline-center">Welcome back!</h2>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="EMAIL"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="PASSWORD"/>
                    </div>
                    <p>
                        <input type="submit" className="submit" value="GET IN"/> &nbsp; or&nbsp;
                        <button className="join">Get in with <img className="googleicon" src={searchicon} alt="login with google"/></button>
                    </p>
                    <Link className="newhere" to="/join">New here? sign up!</Link>
                </form>
            </div>           
        );
    }
} 