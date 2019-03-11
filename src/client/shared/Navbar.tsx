import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <ul className="nav nav-tabs tab-content bg-dark fade-in">
            <li className="nav-item">
                <Link to="/" className="nav-link text-info active">Home</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link text-info active">Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/donate" className="nav-link text-info active">Donate</Link>
            </li>
        </ul>
    );
}

export default Navbar;