import React, { Component } from 'react';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";


function BookCard({title, author, coverImage}) {
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
                <button className="btn-shelf">
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