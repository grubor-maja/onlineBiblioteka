import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import axios from 'axios';
import { ImLibrary } from "react-icons/im";


function Navbar({ searchQuery, setSearchQuery, handleSearch }) {
    const [userName, setUserName] = useState('');
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);

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
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    Biblioteka
                </Link>
                <ImLibrary className='library-icon' />

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
                    <div className="navbar-user">
                        <button 
                            onClick={toggleDropdown} 
                            className="btn btn-secondary dropdown-toggle"
                        >
                            {userName}
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu show">
                                <Link to="/polica" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                                    Moja polica
                                </Link>
                                <Link to="/rezervacije" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                                    Moje rezervacije
                                </Link>
                                <button className="dropdown-item" onClick={handleLogout}>Odjava</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-outline-success navbar-login">Prijava</Link>
                )}
                <Link to="/advanced-search" className="btn btn-outline-success navbar-advanced-search">Napredna pretraga</Link>
            </div>
        </nav>
    );
}

export default Navbar;
