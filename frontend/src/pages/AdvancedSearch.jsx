import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function AdvancedSearch() {
    const [formData,setFormData] = useState({
        author:"",
        title:"",
        publisher:"",
        year:2024
    });
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // pozivanje backend-a kasnije
    }
    return ( 
        <>
        <Navbar/>
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-group">
                <label className='form-label'>Autor</label>
                <input 
                type="text"
                value={formData.author}
                onChange={handleChange}
                className='form-control' />
            </div>
            <div className="form-group">
                <label className='form-label'>Naslov</label>
                <input 
                type="text"
                value={formData.title}
                onChange={handleChange}
                className='form-control' />            
            </div>
            <div className="form-group">
                <label className='form-label'>Izdavac</label>
                <input 
                type="text"
                value={formData.publisher}
                onChange={handleChange}
                className='form-control' />
            </div>
            <div className="form-group">
                <label className='form-label'>Godina izdanja</label>
                <input 
                type="text"
                value={formData.year}
                onChange={handleChange}
                className='form-control' />            
            </div>

            <button type="submit" className='btn btn-primary form-btn'>Pretrazi</button>
        </form>
        </>
     );
}

export default AdvancedSearch;