import React from 'react';
import './RoutesApp.css';
import Header from '../../header/Header';
import Login from "../../body/Login/Login";
import SMEPortalHome from "../DocTool/SMEPortal/SMEPortalHome/SMEPortalHome";
import Home from '../../body/Home/Home';
import NotFoundPage from "../../body/NotFoundPage/NotFoundPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TestDocumentForm from "../DocTool/TestDocumentForm/TestDocumentForm";


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
                    <Route exact path="/doc-tool/sme-portal/create-test-document" component={TestDocumentForm}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>

            </div>
        </Router>
    );
}

export default RoutesApp;
