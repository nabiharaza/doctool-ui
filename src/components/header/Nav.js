import React from 'react';
import {Link} from 'react-router-dom';
import '../body/RoutesApp/routes_app.css';

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/SMEPortal'>
                    <li>SME Portal</li>
                </Link>
                <Link style={navStyle} to='/login'>
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;