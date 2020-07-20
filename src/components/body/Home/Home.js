import React, {Component} from "react";
import '../RoutesApp/routes_app.css'
import file from '../../../assets/file.png';
import aruba from '../../../assets/aruba_logo.png';
import sme from '../../../assets/sme_portal.png';
import Card from '../../ui-modules/Cards/CardUI'

class Home extends Component {
    render() {
        return (<div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'><Card imgsrc={file} title='SME Portal' textContent ='hello'/></div>
                <div className='col-md-4'><Card imgsrc={aruba} title='Make Document' textContent ='I am here'/></div>
                <div className='col-md-4'><Card imgsrc={file} title='Preview Document' textContent ='Dummy Dummy Text' /></div>
            </div>
        </div>);
    }
}

export default Home;