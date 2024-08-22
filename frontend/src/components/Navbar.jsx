import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';

function Navbar() {
    return ( 
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    Biblioteka
                </Link>
            </div>
            <div className="navbar-center">
                <Searchbar />
            </div>
            <div className="navbar-right">
                <Link to="/advanced-search" className="navbar-advanced-search">
                    Napredna pretraga
                </Link>
                <Link to="/login" className="navbar-login">
                    Prijava
                </Link>
            </div>
        </nav>
     );
}

export default Navbar;