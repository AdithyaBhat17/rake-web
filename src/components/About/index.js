import React from 'react';
import AboutNav from './AboutNav';
import abouthero from '../../Assets/abouthero.png';
import './About.css';

export default function About(){
    return (
      <div className="About">
        <AboutNav/>
        <div className="container">
            <h1 className="meet animated fadeInDown">Meet the team behind Rake</h1>
            <div className="row">
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about animated fadeInUp">
                        <img src={abouthero} alt="Adithya NR"/>
                        <h5>Adithya NR</h5>
                        <h6>UI Engineer</h6>
                        <p>
                            <i className="fab fa-linkedin"></i> &nbsp;
                            <i className="fab fa-twitter"></i> &nbsp;
                            <i className="fab fa-dribbble"></i> &nbsp;
                            <i className="fab fa-github"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about-even animated fadeInUp">
                        <img src={abouthero} alt="Bapusaheb Patil"/>
                        <h5>Bapusaheb Patil</h5>
                        <h6>Mobile Developer</h6>
                        <p>
                            <i className="fab fa-linkedin"></i> &nbsp;
                            <i className="fab fa-twitter"></i> &nbsp;
                            <i className="fab fa-dribbble"></i> &nbsp;
                            <i className="fab fa-github"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about animated fadeInUp">
                        <img src={abouthero} alt="Apeksha Joshi"/>
                        <h5>Apeksha Joshi</h5>
                        <h6>Full-stack Developer</h6>
                        <p>
                            <i className="fab fa-linkedin"></i> &nbsp;
                            <i className="fab fa-twitter"></i> &nbsp;
                            <i className="fab fa-github"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about-even animated fadeInUp">
                        <img src={abouthero} alt="Ganavi Jayaram"/>
                        <h5>Ganavi Jayaram</h5>
                        <h6>Full-stack Developer</h6>
                        <p>
                            <i className="fab fa-linkedin"></i> &nbsp;
                            <i className="fab fa-twitter"></i> &nbsp;
                            <i className="fab fa-github"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
