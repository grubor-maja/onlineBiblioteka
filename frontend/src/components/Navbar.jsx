import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import axios from 'axios';

function Navbar({ searchQuery, setSearchQuery, handleSearch }) {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5005/api/users/me', { headers: { 'x-auth-token': token } });
                    setUserName(response.data.ime);
                } catch (error) {
                    console.error('Neuspesno dobavljanje korisnickih podataka:', error);
                }
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setUserName('');
        window.location.href = '/';
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    Biblioteka
                </Link>
            </div>
            <div className="navbar-center">
                {setSearchQuery && handleSearch && (
                    <Searchbar 
                        searchQuery={searchQuery} 
                        setSearchQuery={setSearchQuery} 
                        handleSearch={handleSearch} 
                    />
                )}
            </div>
            <div className="navbar-right">
                {userName ? (
                    <span>
                        Welcome, {userName} <button className='navbar-login' onClick={handleLogout}>Logout</button>
                    </span>
                ) : (
                    <Link to="/login" className="navbar-login">Prijava</Link>
                )}
                <Link to="/advanced-search" className="navbar-advanced-search">Napredna pretraga</Link>
            </div>
        </nav>
    );
}

export default Navbar;
