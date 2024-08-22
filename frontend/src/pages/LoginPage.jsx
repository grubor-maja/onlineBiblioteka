import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function LoginPage() {
    const [formData,setFormData] = useState({
        email:"",
        password:"",

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
            <div className="form-group">
                <label className='form-label'>Password</label>
                <input 
                type="password"
                value={formData.password}
                onChange={handleChange}
                className='form-control' />            
            </div>


            <button type="submit" className='btn btn-primary form-btn'>Prijavi se</button>
            <Link to="/registration" className="btn btn-primary form-btn">
                Registracija
            </Link>
            <Link to="/forgot-password" className="btn btn-primary form-btn">
                Zaboravljena lozinka
            </Link>
        </form>
        </>
     );
}

export default LoginPage;