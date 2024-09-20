import React, { Component } from 'react';

function Searchbar({ searchQuery, setSearchQuery, handleSearch }) {
    return (  
        <div className="search-bar d-flex">
            <input 
                type="search" 
                placeholder='Pretraži...' 
                className='form-control me-2 search-input'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
                type="button" 
                className='btn btn-outline-success btn-navbar' 
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}

export default Searchbar;
