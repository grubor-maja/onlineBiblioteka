import React, { useState } from 'react';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { FaInfo } from "react-icons/fa6";
import axios from 'axios';

function BookCard({ id, title, author, coverImage }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const [isAdding, setIsAdding] = useState(false); 

    const handleInfoClick = () => {
        navigate(`/book-details/${id}`);
    };

    const handleShelfClick = () => {
        setMessage(''); 
        setShowModal(true);
    };

    const handleConfirmAdd = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Morate biti prijavljeni da biste dodali knjigu na policu!');
            setShowModal(false);
            return;
        }

        setIsAdding(true); 

        try {
            const response = await axios.post('http://localhost:5005/api/users/shelf', { bookId: id }, {
                headers: { 'x-auth-token': token }
            });
            setMessage('Knjiga je uspesno dodata na Vasu policu.');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Knjiga je vec na Vasoj polici.');
            } else {
                setMessage('Greska prilikom dodavanja knjige na policu.');
            }
        }

        setIsAdding(false); 
    };

    const closeModal = () => {
        setShowModal(false);
        setMessage(''); 
    };

    return (
        <>
            <div className="book-card">
                <img src={coverImage} alt={title} className="book-cover" />
                <div className="book-info">
                    <h5>{title}</h5>
                    <p>{author}</p>
                </div>
                <div className="book-actions">
                    <button className="btn-shelf" onClick={handleShelfClick}>
                        <GiBookshelf />
                    </button>
                    <button className="btn-info" onClick={handleInfoClick}>
                        <FaInfo />
                    </button>
                </div>
            </div>

            {/* Popup za dodavanje knjige na policu */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {message ? (
                            <div>
                                <p>{message}</p>
                                <button onClick={closeModal}>Zatvori</button>
                            </div>
                        ) : (
                            <div>
                                <p>Da li zelite da dodate ovu knjigu na svoju policu?</p>
                                <button onClick={handleConfirmAdd} disabled={isAdding}>Da</button>
                                <button onClick={closeModal}>Ne</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default BookCard;
