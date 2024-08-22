import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function ForgotPassword() {
    const [formData,setFormData] = useState({
        email:"",

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
                <label className='form-label'>Email</label>
                <input 
                type="text"
                value={formData.email}
                onChange={handleChange}
                className='form-control' />
            </div>
            {/* <button type="submit" className='btn btn-primary form-btn'>Submit</button> */}
            <Link type="submit" to="/new-password" className="btn btn-primary form-btn">
                Submit
            </Link>
        </form>
        </>
     );
}

export default ForgotPassword;