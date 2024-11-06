import './App.css';
import Homepage from './customer/pages/home/home';
import Booking from './customer/bookings/Booking';
import Navbar from "./customer/navbar/Navbar.jsx";
import Header from "./customer/header/Header.jsx";
import SearchItem from "./customer/page/list/SearchItem.jsx";
import List from "./customer/page/list/List.jsx";
import Login from "./customer/page/login-register/Login.jsx";
import Signup from "./customer/page/login-register/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/booking' element={<Booking />} ></Route>
        <Route path='/' element={<Homepage />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;