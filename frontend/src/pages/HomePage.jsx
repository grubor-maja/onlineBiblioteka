import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BooksSection from '../components/BooksSection';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [thrillerBooks, setThrillerBooks] = useState([]);
  const [randomBooks, setRandomBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/books');
        const allBooks = response.data;

        const thrillerBooks = allBooks.filter(book => book.zanr.toLowerCase() === 'triler');
        const shuffledBooks = [...allBooks].sort(() => 0.5 - Math.random());

        setBooks(allBooks);
        setThrillerBooks(thrillerBooks);
        setRandomBooks(shuffledBooks.slice(0, 5));
      } catch (error) {
        console.error('Greska pri povlacenju podataka sa servera:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = () => {
    if (!searchQuery) {
      alert('Morate popuniti search polje');
      return;
    }
    navigate(`/searched-books/${searchQuery}`);
  };

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <BooksSection title="Triler" books={thrillerBooks} />
      <BooksSection title="Random izbor" books={randomBooks} />
    </>
  );
}

export default HomePage;
