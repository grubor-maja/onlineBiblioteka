import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
    const [formData,setFormData] = useState({
        email:"",
        lozinka:"",

    });
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(!formData.email || !formData.lozinka) {
            alert('Oba polja moraju biti popunjena');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5005/api/auth/login',formData);
            const token = response.data;
            
            localStorage.setItem('authToken', token);

            navigate('/');
        } catch (error) {
            if(error.response && error.response.status === 400) {
                alert(error.response.data);
            } else {
                alert(error);
            }
        }
    }
    return ( 
        <>
        <Navbar/>
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-group">
                <label className='form-label'>Email</label>
                <input 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='form-control' />
            </div>
            <div className="form-group">
                <label className='form-label'>Password</label>
                <input 
                type="password"
                name="lozinka"
                value={formData.lozinka}
                onChange={handleChange}
                className='form-control' />            
            </div>


            <button type="submit" className='btn btn-primary form-btn'>Prijavi se</button>
            <Link to="/registration" className="btn btn-primary form-btn">
                Registracija
            </Link>

        </form>
        </>
     );
}

export default LoginPage;