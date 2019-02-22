import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import searchicon from '../../Assets/search.svg'; 

import firebase, { provider } from '../../Firebase'

class LoginForm extends React.Component{

    logIn = async e => {
        e.preventDefault()
        const { email, password } = e.target.elements

        try {
            await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(() => this.props.history.push('/dashboard'))
        } catch (err) {
            alert (err)
        }
    }

    logInWithGoogle = async e => {
        e.preventDefault()
        try {
            await firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => this.props.history.push('/dashboard'))
        } catch (err) {
            alert(err)
        }
    }

    render(){
        if(this.props.userExists)
            alert('Hey, looks like you\'ve signed up before, Try logging in instead')
        return(
            <div className="container">
                <form onSubmit={this.logIn} className="form animated fadeIn">
                    <h2 className="tagline-center">Welcome back!</h2>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="EMAIL"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="PASSWORD"/>
                    </div>
                    <p>
                        <input type="submit" className="submit" value="GET IN"/> &nbsp; or&nbsp;
                        <button
                         onClick={this.logInWithGoogle}
                         className="join">
                         Get in with <img className="googleicon" src={searchicon} alt="login with google"/>
                        </button>
                    </p>
                    <Link className="newhere" to="/join">New here? sign up!</Link>
                </form>
            </div>           
        );
    }
} 

export default withRouter(LoginForm)