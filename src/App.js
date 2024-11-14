import './App.css';
import Homepage from './customer/pages/home/home';
import Booking from './customer/bookings/Booking';
//import List from "./customer/pages/list/List.jsx";
import Login from "./customer/pages/login-register/Login.jsx";
import Signup from "./customer/pages/login-register/Signup.jsx";
import Hotel from "./customer/pages/hotel/Hotel.jsx";
import Home from "./hotel-dashboard/pages/home/Home.jsx";
import List from "./hotel-dashboard/pages/list/List.jsx";
import New from "./hotel-dashboard/pages/new/New.jsx";
import HotelInput from './hotel-dashboard/pages/newHotel/HotelInput.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/booking' element={<Booking />} ></Route>
        <Route path='/' element={<Homepage />} ></Route>
        //<Route path='/list' element={<List />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/Home' element={<Home />} ></Route>
        <Route path='/List' element={<List />} ></Route>
        <Route path='/New' element={<New />} ></Route>
        <Route path='/HotelInput' element={<HotelInput />} ></Route>
        
      </Routes>
    </Router>
  );
}

export default App;