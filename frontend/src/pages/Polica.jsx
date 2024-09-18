import React, {Component} from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import BooksSection from '../components/BooksSection';
import axios from 'axios';

function Polica() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchUserBooks = async() => {
            const token = localStorage.getItem('authToken');
            if(!token) {
                alert('Morate biti prijavljeni da biste videli vasu policu!');
                return;
            }
            try {
                const response = await axios.get('http://localhost:5005/api/users/me/shelf', {
                    headers: {'x-auth-token': token}
                });
                console.log(token);
                setBooks(response.data);
            } catch (error) {
                console.error('Greska pri dohvatanju knjiga sa police');
            }
        };
        fetchUserBooks();
    },[]);

    return (<>
    <Navbar/>
    <div className="container">
        <h2>Moja polica</h2>
        {books.length > 0 ? (
            <BooksSection title="Moje knjige" books={books}/>
        ) : (<p>Nemate knjige na svojoj polici.</p>)
    }
    </div>
    </>);
}

export default Polica;