import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function NewPassword() {
    const [formData,setFormData] = useState({
        newPassword:"",
        code:""

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
                <label className='form-label'>Nova lozinka</label>
                <input 
                type="text"
                value={formData.newPassword}
                onChange={handleChange}
                className='form-control' />
            </div>
            <div className="form-group">
                <label className='form-label'>Kod</label>
                <input 
                type="text"
                value={formData.code}
                onChange={handleChange}
                className='form-control' />            
            </div>


            <Link type="submit" to="/" className="btn btn-primary form-btn">
                Resetuj
            </Link>
        </form>
        </>
     );
}

export default NewPassword;