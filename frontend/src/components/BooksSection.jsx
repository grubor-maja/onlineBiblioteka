import React from 'react';
import BookCard from './BookCard';

function BooksSection({ books,title }) {
  const visibleBooks = books.slice(0, 8);

  return (
    
    <div className="books-section">
        <h2>{title}</h2>
      <div className="books-container">
        {visibleBooks.map((book, index) => (
          <BookCard 
            key={index} 
            title={book.title} 
            author={book.author} 
            coverImage={book.coverImage} 
          />
        ))}
      </div>
    </div>
  );
}

export default BooksSection;
