import React from 'react';
import './Login.css';
import Nav from '../components/header/nav';
import Login from "./Login";
import SMEPortal from "./smePortal";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Dashboard() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/SMEPortal" component={SMEPortal}/>
                <Route path="/scheduling"/>
                </Switch>
            </div>
        </Router>
    );
}

export default Dashboard;
