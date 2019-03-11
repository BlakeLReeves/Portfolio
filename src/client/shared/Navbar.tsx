import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <ul className="nav nav-tabs tab-content bg-dark fade-in">
            <li className="nav-item">
                <Link to="/" className="nav-link text-info active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className="nav-link text-info active">Projects</Link>
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