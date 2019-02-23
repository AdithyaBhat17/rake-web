import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import searchicon from '../../Assets/search.svg'; 

import firebase, { provider } from '../../Firebase'

class SignupForm extends React.Component{
    signUp = async e => {
        e.preventDefault()
        const { email, password } = e.target.elements

        try {
            await firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {return firebase.auth().createUserWithEmailAndPassword(email.value, password.value)})
            .then(this.props.history.push('/dashboard'))
        } catch (err) {
            alert (err)
            localStorage.removeItem('currentUser')
            localStorage.removeItem('authenticated')
        }
    }

    signUpWithGoogle = async e => {
        e.preventDefault()
        try {
            await firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {return firebase.auth().signInWithPopup(provider)})
            .then(this.props.history.push('/dashboard'))
        } catch (err) {
            alert('Hey, looks like you\'ve signed up before, Try logging in instead')
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.signUp} className="form animated fadeIn">
                    <h2 className="tagline-center">Welcome!</h2>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" required placeholder="EMAIL"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" required placeholder="PASSWORD"/>
                    </div>
                    <p>
                        <input type="submit" className="submit" value="JOIN US"/> &nbsp; or&nbsp;
                        <button
                         onClick={this.signUpWithGoogle}
                         className="join">
                         Join us with <img className="googleicon" src={searchicon} alt="login with google"/>
                        </button>
                    </p>
                    <Link className="newhere" to="/login">Been here before? Login here</Link>
                </form>
            </div>           
        );
    }
} 

export default withRouter(SignupForm)