import React from 'react';
import './routes_app.css';
import Nav from '../../header/Nav';
import Login from "../../body/Login/Login";
import SMEPortal from "../../body/SME-Portal/smePortal";
import Home from '../../body/Home/Home';
import NotFoundPage from "../../body/NotFoundPage/NotFoundPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function RoutesApp() {
    return (
        <Router>
            <div className="RoutesApp">
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/SMEPortal" component={SMEPortal}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>

            </div>
        </Router>
    );
}

export default RoutesApp;
