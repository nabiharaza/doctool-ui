
import React, {Component} from 'react';
import '../RoutesApp/routes_app.css';
import logo from "../../../assets/aruba.png";
import aruba from '../../../assets/aruba_logo.png';
import sme from '../../../assets/sme_portal.png';
import Card from '../../ui-modules/Cards/CardUI'
import orange from '../../../assets/orange.png'
import logo1 from '../../../assets/hpe.jpg'


class SMEPortal extends Component {
    render() {
        return (<div className='container-fluid d-flex justify-content-center' >
            <h1>SME Portal</h1>
            <div className='row'>
                <div className='col-md-4'><Card imgsrc={logo} title='Create New' textContent ='HTS Engineer Portal'/></div>
                <div className='col-md-4'><Card imgsrc={logo} title='Edit Existing' textContent ='Admin Portal'/></div>
                <div className='col-md-4'><Card imgsrc={logo} title='View Existing' textContent ='View Dashboards' /></div>
            </div>
        </div>);
    }
}

export default SMEPortal;
