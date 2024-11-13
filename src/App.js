import './App.css';
import Homepage from './customer/pages/home/home';
import Booking from './customer/bookings/Booking';
import Navbar from "./customer/navbar/Navbar.jsx";
import Header from "./customer/header/Header.jsx";
import SearchItem from "./customer/pages/list/SearchItem.jsx";
import List from "./customer/pages/list/List.jsx";
import Login from "./customer/pages/login-register/Login.jsx";
import Signup from "./customer/pages/login-register/Signup.jsx";
import Hotel from "./customer/pages/hotel/Hotel.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelDashboard from './hotel-dashboard/HotelDashboard.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/booking' element={<Booking />} ></Route>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path="/hotel-dashboard/components" element={<HotelDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;