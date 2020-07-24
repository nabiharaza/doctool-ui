import React, {Component} from "react";
import '../RoutesApp/RoutesApp.module.css'
import file from '../../../assets/file.png';
import aruba from '../../../assets/aruba_logo.png';
import sme from '../../../assets/sme_portal.png';
import Card from '../../modules/HorizontalCard/HorizontalCard'
import logo from '../../../assets/aruba.png'
import orange from '../../../assets/orange.png'
import logo1 from '../../../assets/hpe.jpg'
import VerticalCard from "../../modules/VerticalCard/VerticalCard";
import PageTitle from "../../modules/PageTitle/PageTitle";


class Home extends Component {
    render() {
        return (
            <div className='container'>
                <PageTitle title={'HTS Dashboard'} />

                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <VerticalCard imgsrc={orange} title='DocTool' toplink='SME Portal' route_toplink = '/doc-tool/sme-portal/home'
                                                    bottomlink='Engineer Portal' route_bottomlink='/'/>

                                <hr/>
                                <VerticalCard imgsrc={orange} title='Scheduling' toplink='Calendar and Skills' route_toplink = '/'
                                                    bottomlink='Incoming Soft Requests' route_bottomlink='/'/>
                                <hr/>
                                <VerticalCard imgsrc={orange} title='Dashboards' toplink='Revenue' route_toplink = '/'
                                                    bottomlink='Something' route_bottomlink='/'/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default Home;