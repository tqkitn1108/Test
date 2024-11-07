import logo from './logo.svg';
import './App.css';
import Hotel from './customer/pages/hotel/Hotel';
import ReservationPage from './customer/pages/reservation/ReservationPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hotel/>
        {/* <ReservationPage/> */}
      </header>
    </div>
  );
}

export default App;
