import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BooksSection from '../components/BooksSection';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SearchedBooks() {
  const [books, setBooks] = useState([]);
  const { searchQuery } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/books');
        const allBooks = response.data;

        const filteredBooks = allBooks.filter(book =>
          book.naslov.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setBooks(filteredBooks);
      } catch (error) {
        console.error('Greska pri povlacenju podataka sa servera:', error);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      {books.length > 0 ? (
        <BooksSection title={`Rezultati za: "${searchQuery}"`} books={books} />
      ) : (
        <p>Nema knjiga za datu reč.</p>
      )}
    </>
  );
}

export default SearchedBooks;
