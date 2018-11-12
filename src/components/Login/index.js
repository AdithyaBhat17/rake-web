import React from 'react';
import LoginNavbar from './LoginNavbar';
import LoginForm from './LoginForm';

export default class Login extends React.Component{
    render(){
        return(
            <div>
                <LoginNavbar/>
                <LoginForm />
            </div>            
        );
    }
} 