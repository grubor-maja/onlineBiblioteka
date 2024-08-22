import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function Registration() {
    const [formData,setFormData] = useState({
        name:"",
        lastname:"",
        email:"",
        password:""
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
                <label className='form-label'>Ime</label>
                <input 
                type="text"
                value={formData.name}
                onChange={handleChange}
                className='form-control' />
            </div>
            <div className="form-group">
                <label className='form-label'>Prezime</label>
                <input 
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                className='form-control' />            
            </div>
            <div className="form-group">
                <label className='form-label'>Email</label>
                <input 
                type="text"
                value={formData.email}
                onChange={handleChange}
                className='form-control' />
            </div>
            <div className="form-group">
                <label className='form-label'>Password</label>
                <input 
                type="password"
                value={formData.password}
                onChange={handleChange}
                className='form-control' />            
            </div>

            <button type="submit" className='btn btn-primary form-btn'>Registruj se</button>
        </form>
        </>
     );
}

export default Registration;