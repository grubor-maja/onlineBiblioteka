import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import BookCard from './components/BookCard';
import BooksSection from './components/BooksSection';
import HomePage from './pages/HomePage';
import AdvancedSearch from './pages/AdvancedSearch';
import LoginPage from './pages/LoginPage';
import Registration from './pages/Registration';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';

function App() {
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
  return (
    <>
      <Routes>
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/> */}
        <Route path="/"element={<HomePage/>}/>
        <Route path="/advanced-search" element={<AdvancedSearch/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/new-password" element={<NewPassword/>}/>

      </Routes>
    </>
  );
}

export default App;
