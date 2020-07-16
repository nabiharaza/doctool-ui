import React from 'react';
import '../body/Login/login.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar-dark">
            <h3>Logo</h3>
            <ul>
                <Link>
                    <li>Home</li>
                </Link>
                <Link>
                    <li>DocTool</li>
                </Link>
                <Link>
                    <li>SME Portal</li>
                </Link>
                <Link>
                    <li>Scheduling</li>
                </Link>
                <Link>
                    <li>Confluence</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;
