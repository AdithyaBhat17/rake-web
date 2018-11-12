import React from 'react';
import LoginNavbar from './LoginNavbar';
import SignupForm from './SignupForm';

export default class Signup extends React.Component{
    render(){
        return(
            <div>
                <LoginNavbar/>
                <SignupForm />
            </div>            
        );
    }
} 