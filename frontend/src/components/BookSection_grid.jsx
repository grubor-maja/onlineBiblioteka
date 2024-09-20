import React, { Component } from 'react';
import BookCard from './BookCard';

function BookSectionGrid({ books, title }) {
    return (
      <div className="book-section-grid">
        <h2>{title}</h2>
        <div className="books-grid-container">
          {books.map((book, index) => (
            <BookCard 
              key={index} 
              title={book.naslov} 
              author={book.autor} 
              id={book._id}
              coverImage={book.fotografija} 
            />
          ))}
        </div>
      </div>
    );
  }

export default BookSectionGrid;