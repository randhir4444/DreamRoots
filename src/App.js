import './App.css';
import Card from './Card';
import { IoIosArrowBack } from 'react-icons/io';


function App() {
  return (
    <div className="App">
      <div className="header">
      <div className="backlogo"><h2> <IoIosArrowBack /></h2></div>
        <div className="title">UPCOMING APPOINTMENTS</div>
      </div>
      <div className="banner">
        <div className="description">
          <h4>New Booking in 2 Minutes</h4>
        </div>
        <div>
          <button className="button">Book Now</button>
        </div>
      </div>
      <div className="showCard">
        <Card/>
      </div>
      <div>
        <button className="backbutton">Back</button>
      </div>
    </div>
  );
}

export default App;
