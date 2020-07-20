import React from 'react';
import PageNotFound from '../../../assets/404error.png'


class NotFoundPage extends React.Component {
    render() {
        return <div>
            <img src={PageNotFound}/>
            <p style={{textAlign: "center"}}>
                <a href='/' className='btn btn-dark btn-sm'>Let's go back!</a>
            </p>
        </div>;
    }
}

export default NotFoundPage;