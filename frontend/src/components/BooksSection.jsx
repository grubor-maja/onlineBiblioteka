import React, { useState } from 'react';
import BookCard from './BookCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function BooksSection({ books, title }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBooksCount = Math.min(5, books.length); 

  const visibleBooks = books.slice(startIndex, startIndex + visibleBooksCount);

  const handleNext = () => {
    if (startIndex + visibleBooksCount >= books.length) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex === 0) {
      setStartIndex(books.length - visibleBooksCount);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="books-section">
      <h2>{title}</h2>
      <div className="book-carousel">
        {books.length > visibleBooksCount && (
          <button onClick={handlePrevious} className="carousel-btn">
            <FaArrowLeft/>
          </button>
        )}
        <div className="books-container">
          {visibleBooks.map((book, index) => (
            <BookCard 
              key={index} 
              title={book.naslov} 
              author={book.autor} 
              id={book._id}
              coverImage={book.fotografija} 
            />
          ))}
        </div>
        {books.length > visibleBooksCount && (
          <button onClick={handleNext} className="carousel-btn">
            <FaArrowRight/>
          </button>
        )}
      </div>
    </div>
  );
}
export default BooksSection;
