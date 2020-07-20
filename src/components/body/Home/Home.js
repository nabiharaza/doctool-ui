import React, {Component} from "react";
import '../RoutesApp/routes_app.css'
import file from '../../../assets/file.png';
import aruba from '../../../assets/aruba_logo.png';
import sme from '../../../assets/sme_portal.png';
import Card from '../../ui-modules/Cards/CardUI'
import logo from '../../../assets/aruba.png'
import orange from '../../../assets/orange.png'
import logo1 from '../../../assets/hpe.jpg'

class Home extends Component {
    render() {
        return (<div className='container-fluid d-flex justify-content-center' >
            <h2><span className="text-center">HTS </span>Dashboard</h2>
            <div className='row'>
                <div className='col-md-4'><Card imgsrc={logo} title='Doc Tool' textContent ='HTS Engineer Portal'/></div>
                <div className='col-md-4'><Card imgsrc={logo} title='HTS Engineering Portal' textContent ='Admin Portal'/></div>
                <div className='col-md-4'><Card imgsrc={logo} title='Tableau Dashboards' textContent ='View Dashboards' /></div>
            </div>
        </div>);
    }
}

export default Home;