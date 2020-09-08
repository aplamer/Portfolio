import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from "./components/App";
import About from "./components/About";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";
import './index.css';

ReactDOM.render(
    <Router history = {createBrowserHistory()}>
        <Switch>
            <Route exact path = '/'  render ={() => <Header><App /></Header>}/>
            {/* <Route path = '/about' render ={() => <Header><About /></Header>}/>
            <Route path = '/education'  render ={() => <Header><Education /></Header>}/>
            <Route path = '/contacts' render ={() => <Header><Contacts /></Header>}/>
            <Route path = '/projects' render ={() => <Header><Projects /></Header>}/> */}
        </Switch>
    </Router>, 
    document.getElementById('root')
);