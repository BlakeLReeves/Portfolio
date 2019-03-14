import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <div className="containter">
            <div className="row">
                <div className="col-sm-12 bg-dark">
                    <ul className="nav nav-tabs tab-content fade-in">
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
                            <Link to="/donate" className="nav-link text-info active">Example API</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link text-info active">Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;