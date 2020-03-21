import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import * as serviceWorker from './serviceWorker';
import Home from "./Site/Paginas/Home";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
    
    , document.getElementById('root'));
serviceWorker.unregister();
