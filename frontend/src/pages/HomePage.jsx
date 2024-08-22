import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BooksSection from '../components/BooksSection';

function HomePage() {
    const books = [
        {title:'Proces',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces2',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces3',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces4',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces5',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces6',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces7',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces8',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces9',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces10',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces11',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces12',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces13',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'},
        {title:'Proces14',author:'Franc Kafka',coverImage:'https://www.laguna.rs/_img/korice/4020/proces-franc_kafka_v.jpg'}
    
      ]
      const books2 = [
        {title:'The Magicians',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians2',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians3',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians4',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians5',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians6',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians7',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians8',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians9',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians10',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians11',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians12',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians13',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians14',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'},
        {title:'The Magicians15',author:'Lev Grossman',coverImage:'https://m.media-amazon.com/images/I/712XNYCAXQL._AC_UF894,1000_QL80_.jpg'}
    
      ]
    return ( <>
    <Navbar/>
    <BooksSection
    title="Klasici"
    books={books}
    />
        <BooksSection
    title="Fantasy"
    books={books2}
    />
    </> );
}

export default HomePage;