import React from 'react';
import Nav from './Nav';
import hero from '../../Assets/hero.png';
import { withRouter } from 'react-router-dom'

const Home = () => (
  <div className="App">
    <Nav />
    <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-push-6">
            <img src={hero} className="hero" alt="rake"/>
          </div>
          <div className="col-lg-6 col-lg-pull-6">
            <h1 className="tagline">Make your images smart</h1>
            <p className="about-site">Ever looked at a handbag that someone had on at the airport and wondered where you could buy 
            it without asking her? Ever went out for a run and saw a food discount QR code that you wanted to save for later use? 
            What about that time when someone handed you a visiting card and you wanted the details saved on your phone? Rake is 
            here to help with all of that with its unique set of features like text recognition, barcode scanning & image labelling.
              <br/> <br/>
              <a href="/" className="download-app"><i className="fab fa-google-play"></i>&nbsp; GET APP</a>
            </p>
          </div>
        </div>
    </div>
  </div>
)

export default withRouter(Home);