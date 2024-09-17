import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetailsPage() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

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

    if (!book) {
        return <div>Ucitavanje...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="book-details-container">
                <div className="book-image-section">
                    <img src={book.fotografija} alt={book.naslov} className="book-details-cover" />
                </div>
                <div className="book-info-section">
                    <h1>{book.naslov}</h1>
                    <p><strong>Autor:</strong> {book.autor.join(', ')}</p>
                    <p><strong>Izdavac:</strong> {book.izdavac}, {book.godinaIzdanja}</p>
                    <p>{book.opis || 'Genericki ki opis knjige koji ce biti zamenjen stvarnim podacima kasnije.'}</p>
                    <div className="book-availability">
                        <p><strong>Dostupnost primerka:</strong></p>
                        <p>Ukupno: {book.signatura.length}</p>
                        <p>Slobodno: {book.signatura.filter(sig => sig.status === 'slobodan').length}</p>
                        <p>Rezervisano: {book.signatura.filter(sig => sig.status === 'zauzet').length}</p>
                    </div>
                    <div className="book-actions">
                        <button className="btn-reserve">Rezervisi</button>
                        <button className="btn-shelf">Na policu</button>
                    </div>
                </div>
                <div className="book-signature-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Signatura</th>
                                <th>Status</th>
                                <th>Inventarski broj</th>
                            </tr>
                        </thead>
                        <tbody>
                            {book.signatura.map((sig, index) => (
                                <tr key={index}>
                                    <td>{sig.signatura}</td>
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
