import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route } from "react-router-dom"; 
import * as serviceWorker from './serviceWorker';
import Root from './Root';

//axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
    <Root>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Root>
    , document.getElementById('root'));


serviceWorker.unregister();
