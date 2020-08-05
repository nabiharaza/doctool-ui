import React from 'react'
import './PageTitle.module.css';

const PageTitle = props => {
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <h1>{props.title}</h1>
            </div>
        </div>

    );
};

export default PageTitle;