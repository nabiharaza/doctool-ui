import React, {Component} from 'react';
import '../../../RoutesApp/RoutesApp.css';
import aruba from '../../../../../assets/aruba_logo.png';
import HorizontalCard from '../../../../modules/HorizontalCard/HorizontalCard'
import PageTitle from "../../../../modules/PageTitle/PageTitle";


class SMEPortalHome extends Component {
    render() {
        return (
            <div className='container'>
                <PageTitle title={'DocTool SME Portal'}/>
                <div className='row'>
                    <div className='col-md-4'><HorizontalCard imgsrc={aruba} title='Create New'
                                                              textContent='For adding new test plans'
                                                              button='Create'
                                                              route={'/doc-tool/sme-portal/create-test-document'}/>
                    </div>
                    <div className='col-md-4'><HorizontalCard imgsrc={aruba} title='Edit Existing'
                                                              textContent='For editing existing test plans'
                                                              button='Edit'/>
                    </div>
                    <div className='col-md-4'><HorizontalCard imgsrc={aruba} title='View Existing'
                                                              textContent='Search and View'
                                                              button='Search'/>
                    </div>
                </div>
            </div>

        );
    }
}

export default SMEPortalHome;
