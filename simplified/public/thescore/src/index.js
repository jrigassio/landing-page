import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
apiKey: "AIzaSyA0SNcVUy6i96rq6yoxZ8fvgSBoz5M91CQ",
authDomain: "jrigassio-landing-page.firebaseapp.com",
databaseURL: "https://jrigassio-landing-page.firebaseio.com",
projectId: "jrigassio-landing-page",
storageBucket: "jrigassio-landing-page.appspot.com",
messagingSenderId: "367418445305"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
