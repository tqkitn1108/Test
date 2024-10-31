import logo from './logo.svg';
import './App.css';
import Homepage from './customer/pages/home/home';
import Booking from './customer/bookings/Booking';
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
