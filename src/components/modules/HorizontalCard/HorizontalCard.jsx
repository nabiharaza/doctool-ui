import React from 'react'
import './HorizontalCard.module.css';

const HorizontalCard = props => {
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='aruba' className="card-img-top"/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>{props.textContent}</p>
                <a href={props.route} className='btn btn-outline-primary btn-sm'>{props.button}</a>

            </div>
        </div>
    );
};

export default HorizontalCard;