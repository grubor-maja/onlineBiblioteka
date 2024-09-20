import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function AdvancedSearch() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        publisher: "",
        year: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { author, title, publisher, year } = formData;

        navigate(`/advanced-searched-books/${author || 'undefined'}/${title || 'undefined'}/${publisher || 'undefined'}/${year || 'undefined'}`);
    };

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-group">
                    <label className='form-label'>Autor</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label className='form-label'>Naslov</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label className='form-label'>Izdavac</label>
                    <input
                        type="text"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label className='form-label'>Godina izdanja</label>
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>

                <button type="submit" className='btn btn-outline-success form-btn'>Pretrazi</button>
            </form>
        </>
    );
}

export default AdvancedSearch;
