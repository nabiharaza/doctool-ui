import React, {Component} from "react";
import Card from './CardUI';
import file from "../../../assets/file.png";
import aruba from "../../../assets/aruba_logo.png";
import sme from "../../../assets/sme_portal.png";

class Cards extends Component {
    render() {
        return (<div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'><Card imgsrc={file} title='SME Portal'/></div>
                <div className='col-md-4'><Card imgsrc={aruba} title='Make Document'/></div>
                <div className='col-md-4'><Card imgsrc={sme} title='Preview Document'/></div>
            </div>
        </div>);
    }
}

export default Cards;