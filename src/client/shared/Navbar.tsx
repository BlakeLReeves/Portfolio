import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="nav bg-dark fade-in">
            <Link to="/" className="nav-link text-danger active">Home</Link>
            <Link to="/contact" className="nav-link text-danger active">Contact</Link>
            <Link to="/donate" className="nav-link text-danger active">Donate</Link>
        </nav>
    );
}

export default Navbar;