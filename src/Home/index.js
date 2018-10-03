import React, { Component } from 'react';
import Nav from './Nav';
import hero from '../Assets/hero.png';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
            <div className="row">
              <div className="col-lg-6 col-lg-push-6">
                <img src={hero} className="hero animated fadeInRight" alt="rake"/>
              </div>
              <div className="col-lg-6 col-lg-pull-6">
                <h1 className="tagline animated fadeInLeft">Make your images smart</h1>
                <p className="about-site animated fadeInLeft">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Totam commodi ut quisquam nobis aliquam minima deserunt provident atque illum quam nisi eius 
                  voluptate reiciendis aspernatur ducimus quae dicta labore ipsam, nemo nihil dignissimos harum 
                  dolores amet. Numquam odit optio delectus laboriosam quo. Assumenda nam aperiam provident quas 
                  architecto, voluptatibus expedita.
                  <br/> <br/>
                  <a href="/" className="download-app"><i className="fab fa-google-play"></i>&nbsp; GET APP</a>
                </p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;