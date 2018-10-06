import React from 'react';
import AboutNav from './AboutNav';
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
                        <img src="https://avatars1.githubusercontent.com/u/20818481?s=460&v=4" alt="Adithya NR"/>
                        <h5>Adithya NR</h5>
                        <h6>UI Engineer</h6>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adithya-nr"><i className="fab fa-linkedin"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/Adithyabhat9"><i className="fab fa-twitter"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://www.dribbble.com/AdithyaNR"><i className="fab fa-dribbble"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/AdithyaBhat17"><i className="fab fa-github"></i></a>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about-even animated fadeInUp">
                        <img src="https://avatars1.githubusercontent.com/u/16699418?s=460&v=4" alt="Bapusaheb Patil"/>
                        <h5>Bapusaheb Patil</h5>
                        <h6>Mobile Developer</h6>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bapspatil/"><i className="fab fa-linkedin"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/baps_patil"><i className="fab fa-twitter"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/bapspatil"><i className="fab fa-dribbble"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bapspatil"><i className="fab fa-github"></i></a>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about animated fadeInUp">
                        <img src="https://avatars1.githubusercontent.com/u/20772681?s=460&v=4" alt="Apeksha Joshi"/>
                        <h5>Apeksha Joshi</h5>
                        <h6>Full-stack Developer</h6>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="#!"><i className="fab fa-linkedin"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="#!"><i className="fab fa-twitter"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/apeksha-joshi"><i className="fab fa-github"></i></a>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12">
                    <div className="thumbnail-about-even animated fadeInUp">
                        <img src="https://avatars3.githubusercontent.com/u/20839786?s=460&v=4" alt="Ganavi Jayaram"/>
                        <h5>Ganavi Jayaram</h5>
                        <h6>Full-stack Developer</h6>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ganavee/"><i className="fab fa-linkedin"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="#!"><i className="fab fa-twitter"></i></a> &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ganavee/"><i className="fab fa-github"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
