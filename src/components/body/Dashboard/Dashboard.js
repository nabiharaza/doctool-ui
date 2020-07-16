import React from 'react';
import '../Login/login.css';
import Nav from '../../header/nav';
import Login from "../../body/Login/Login";
import SMEPortal from "../../body/SME-Portal/smePortal";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Dashboard() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/login"  component={Login}/>
                <Route exact path="/SMEPortal" component={SMEPortal}/>
                <Route path="/scheduling"/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default Dashboard;
