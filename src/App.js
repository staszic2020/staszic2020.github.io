import React from 'react';
import Countdown from 'react-countdown';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.scss';

const renderer = ({days, hours, minutes, seconds}) => {
  return (
    <div className="App-countdown">
      <CircularProgressbar maxValue={365} minValue={0} value={365-days} text={days.toString().padStart(1,'0')} />
      <CircularProgressbar maxValue={24} minValue={0} value={24-hours} text={hours.toString().padStart(1,'0')} />
      <CircularProgressbar maxValue={60} minValue={0} value={60-minutes} text={minutes.toString().padStart(1,'0')} />
      <CircularProgressbar maxValue={60} minValue={0} value={60-seconds} text={seconds.toString().padStart(1,'0')} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Countdown date={new Date("January 11 2020 00:00")} renderer={renderer} />
      </div>
    </div>
  );
}

export default App;
