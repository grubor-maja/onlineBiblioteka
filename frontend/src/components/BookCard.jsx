import React from 'react';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function BookCard({ id, title, author, coverImage }) {
    const navigate = useNavigate();

    const handleShelfClick = () => {
        navigate(`/book-details/${id}`);
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
                    <button className="btn-reserve">
                        <i className="fas fa-calendar-check">
                            <FaRegCalendarCheck />
                        </i>
                    </button>
                    <button className="btn-shelf" onClick={handleShelfClick}>
                        <i className='fas fa-list'>
                            <GiBookshelf />
                        </i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default BookCard;
