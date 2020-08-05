import React from 'react'
import './VerticalCard.module.css';

const VerticalCard = props => {
    return (
        <div className='row'>
            <div className='col-sm-4'>
                <div className="media">
                    <img src={props.imgsrc} class="img-fluid" alt="image" width="200" height="200"/>
                    {/*TODO make width and height as prop*/}
                </div>
            </div>
            <div className='col-sm-8'>
                <h3>{props.title}</h3>
                <a href={props.route_toplink}>{props.toplink}</a>
                <br />
                <a href={props.route_bottomlink}>{props.bottomlink}</a>
                {/*TODO make this iterable*/}
            </div>
        </div>

    );
};

export default VerticalCard;