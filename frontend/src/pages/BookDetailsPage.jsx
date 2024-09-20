import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetailsPage() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [message, setMessage] = useState(''); 

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5005/api/books/${bookId}`);
                setBook(response.data);
            } catch (error) {
                console.error('Greska pri povlacenju podataka o knjizi:', error);
            }
        };

        fetchBookDetails();
    }, [bookId]);

    const handleAddToShelf = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setMessage('Morate biti prijavljeni da biste dodali knjigu na policu.');
            return;
        }

        try {
            await axios.post('http://localhost:5005/api/users/shelf', { bookId }, {
                headers: { 'x-auth-token': token }
            });
            setMessage('Knjiga je uspesno dodata na vašu policu.');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Knjiga je već na vašoj polici.');
            } else {
                setMessage('Greska prilikom dodavanja knjige na policu.');
            }
        }
    };

    const handleRemoveFromShelf = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setMessage('Morate biti prijavljeni da biste obrisali knjigu sa police.');
            return;
        }

        try {
            await axios.delete('http://localhost:5005/api/users/shelf', {
                headers: { 'x-auth-token': token },
                data: { bookId }
            });
            setMessage('Knjiga je uspešno obrisana sa Vase police.');
        } catch (error) {
            setMessage('Greska prilikom brisanja knjige sa police.');
        }
    };

    if (!book) {
        return <div>Učitavanje...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <img src={book.fotografija} alt={book.naslov} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h1 className='book-heading'>{book.naslov}</h1>
                        <p><strong>Autor:</strong> {book.autor.join(', ')}</p>
                        <p><strong>Izdavač:</strong> {book.izdavac}, {book.godinaIzdanja}</p>
                        <p className='book-details'>{book.opis || 'Genericki opis knjige koji će biti zamenjen stvarnim podacima kasnije.'}</p>

                        <div className="book-additional-info">
                            <div className="book-availability mt-4">
                                <h4 className='book-availability-heading'>Dostupnost primerka:</h4>
                                <p>Ukupno: {book.signatura.length}</p>
                                <p>Slobodno: {book.signatura.filter(sig => sig.status === 'slobodan').length}</p>
                                <p>Rezervisano: {book.signatura.filter(sig => sig.status === 'zauzet').length}</p>
                            </div>
                            
                            <div className='book-buttons'>
                                <button className="btn btn-success me-2" onClick={handleAddToShelf}>Dodaj na policu</button>
                                <button className="btn btn-danger" onClick={handleRemoveFromShelf}>Obriši sa police</button>
                            </div>
                        </div>


                        {/* Prikaz poruke */}
                        {message && <div className="alert alert-info mt-3">{message}</div>}
                    </div>
                </div>

                <div className="book-signature-table mt-4">
                    <h4 className='book-table'>Signatura:</h4>
                    <table className="table table-hover">
                        <thead className='thead-dark'>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Status</th>
                                <th scope="col">Inventarski broj</th>
                            </tr>
                        </thead>
                        <tbody>
                            {book.signatura.map((sig, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{sig.status}</td>
                                    <td>{sig.inventarskiBroj}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BookDetailsPage;
