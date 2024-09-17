import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

function Registration() {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.lastname || !formData.email || !formData.password) {
            alert('Sva polja moraju biti popunjena');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5005/api/auth/register', {
                ime: formData.name,
                prezime: formData.lastname,
                email: formData.email,
                lozinka: formData.password
            });

            alert('Uspesna registracija!');
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data); 
            } else {
                alert('Doslo je do greske prilikom registracije');
            }
        }
    };

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-group">
                    <label className='form-label'>Ime</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label className='form-label'>Prezime</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label className='form-label'>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>

                <button type="submit" className='btn btn-primary form-btn'>Registruj se</button>
            </form>
        </>
    );
}

export default Registration;
