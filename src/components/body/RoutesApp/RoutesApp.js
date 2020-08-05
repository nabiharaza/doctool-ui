import React from 'react';
import './RoutesApp.module.css';
import Header from '../../header/Header';
import Login from "../../body/Login/Login";
import SMEPortalHome from "../DocTool/SMEPortal/SMEPortalHome/SMEPortalHome";
import Home from '../../body/Home/Home';
import NotFoundPage from "../../body/NotFoundPage/NotFoundPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateStepOne from "../DocTool/SMEPortal/CreateStepOne/CreateStepOne";


function RoutesApp() {
    return (
        <Router>
            <div className="RoutesApp">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/doc-tool/sme-portal/home" component={SMEPortalHome}/>
                    <Route exact path="/doc-tool/sme-portal/create-test-document" component={CreateStepOne}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>

            </div>
        </Router>
    );
}

export default RoutesApp;
