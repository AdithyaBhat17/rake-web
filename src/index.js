import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
        </React.Fragment>
    </Router>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
