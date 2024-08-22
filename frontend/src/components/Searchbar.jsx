import React, { Component } from 'react';

function Searchbar() {
    return (  
        <>
        <div className="search-bar d-flex">
            <input type="search" placeholder='Pretrazi...' className='form-control me-2 search-input' />
            <button type="submit" className='btn btn-outline-success'>Search</button>
        </div>
        </>
    );
}

export default Searchbar;