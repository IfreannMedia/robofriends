import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './components/card/Card.js';
import 'tachyons';
import {robots} from './models/robots.js'


ReactDOM.render(
       robots.map(el => <Card robot={el} />), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
