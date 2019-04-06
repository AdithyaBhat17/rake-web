import React from 'react';
import Nav from './Nav';
import hero from '../../Assets/hero.png';
import { withRouter } from 'react-router-dom'

import firebase, { provider } from '../../Firebase'

const logIn = async (props) => {
  try {
      await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() { return firebase.auth().signInWithPopup(provider) })
      props.history.push('/dashboard')
  } catch (err) {
      alert(err)
  }
}

const Home = (props) => {
  return (
    <div className="App">
      <Nav logIn={() => logIn(props)}/>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-push-6">
              <img src={hero} className="hero" alt="rake"/>
            </div>
            <div className="col-lg-6 col-lg-pull-6">
              <h1 className="tagline">Make your images smart</h1>
              <p className="about-site">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
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
  )
}

export default withRouter(Home);