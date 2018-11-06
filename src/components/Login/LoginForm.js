import React from 'react';
import login from '../../Assets/login.svg';

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2 className="tagline">Lorem ipsum dolor.</h2>
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="Username">USERNAME</label>
                                <input type="email" className="form-control" placeholder="mikewazowski@gmail.com"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">PASSWORD</label>
                                <input type="password" className="form-control" placeholder="******"/>
                            </div>
                            <input type="submit" className="submit" value="LOGIN"/>
                        </form>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={login} alt="login" className="hero"/>
                    </div>
                </div>                
            </div>            
        );
    }
} 