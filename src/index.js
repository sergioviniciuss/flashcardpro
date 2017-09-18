import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import App from './components/App';
import Stack from './components/Stack';

const store = createStore(rootReducer);
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={App} />
            <Route path ='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);