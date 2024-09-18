import React, {Component} from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import BooksSection from '../components/BooksSection';
import axios from 'axios';

function Rezervacije() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchUserBooks = async() => {
            const token = localStorage.getItem('authToken');
            if(!token) {
                alert('Morate biti prijavljeni da biste videli vasu rezervacije!');
                return;
            }
            try {
                const response = await axios.get('http://localhost:5005/api/users/me/reservations', {
                    headers: {'x-auth-token': token}
                });
                console.log(token);
                setBooks(response.data);
            } catch (error) {
                console.error('Greska pri dohvatanju knjiga sa rezervacije');
            }
        };
        fetchUserBooks();
    },[]);

    return (<>
    <Navbar/>
    <div className="container">
        <h2>Moje rezervacije</h2>
        {books.length > 0 ? (
            <BooksSection title="Moje knjige" books={books}/>
        ) : (<p>Nemate rezervisane knjige.</p>)
    }
    </div>
    </>);
}

export default Rezervacije;