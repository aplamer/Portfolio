import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from "./components/App";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";
import './index.css';

ReactDOM.render(
    <HashRouter history = {createBrowserHistory()}>
        <Switch>
            <Route exact path = '/'  render ={() => <Header><App /></Header>}/>
            <Route path = '/education'  render ={() => <Header><Education /></Header>}/>
            <Route path = '/contacts' render ={() => <Header><Contacts /></Header>}/>
            <Route path = '/projects' render ={() => <Header><Projects /></Header>}/>
        </Switch>
    </HashRouter>, 
    document.getElementById('root')
);