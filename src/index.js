import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './components/card/Card.js';
import 'tachyons';
import {robots} from './models/robots.js'


ReactDOM.render(<div>
	<Card robot={robots[0]}/>
	<Card robot={robots[1]}/>
	<Card robot={robots[2]}/>
	<Card robot={robots[3]}/>
	<Card robot={robots[4]}/>
	</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
