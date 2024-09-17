import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BooksSection from '../components/BooksSection';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AdvancedSearchedBooks() {
    const { author, title, publisher, year } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5005/api/books');
                let filteredBooks = response.data;

                // Apply filters
                if (author && author !== 'undefined') {
                    filteredBooks = filteredBooks.filter(book =>
                        book.autor.some(a => a.toLowerCase().includes(author.toLowerCase()))
                    );
                }
                if (title && title !== 'undefined') {
                    filteredBooks = filteredBooks.filter(book =>
                        book.naslov.toLowerCase().includes(title.toLowerCase())
                    );
                }
                if (publisher && publisher !== 'undefined') {
                    filteredBooks = filteredBooks.filter(book =>
                        book.izdavac.toLowerCase().includes(publisher.toLowerCase())
                    );
                }
                if (year && year !== 'undefined') {
                    filteredBooks = filteredBooks.filter(book =>
                        book.godinaIzdanja.toString() === year
                    );
                }

                setBooks(filteredBooks);
            } catch (error) {
                console.error('Greska pri povlacenju podataka sa servera:', error);
            }
        };
        fetchBooks();
    }, [author, title, publisher, year]);

    return (
        <>
            <Navbar />
            <BooksSection title="Rezultati napredne pretrage" books={books} />
        </>
    );
}

export default AdvancedSearchedBooks;
