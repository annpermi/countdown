import React, { useState, useEffect, useRef } from 'react';
import './App.css'

const App = () => {
  //State for days, hours, minutes, seconds
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [pause, setPause] = useState(false);

    let interval = useRef(); // interval in which time will be updating

  const startTimer = () => {
    const countdownDate = new Date('June 3 2021 00:00:00:00').getTime(); //start timer from this date, getTime() - method
    interval = setInterval(()=>{
      const now = new Date().getTime(); //keep updating the timer (intance)
      const distance = countdownDate - now; 

      const days =  Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
      const seconds = Math.floor((distance % (1000 * 60) / 1000)) //how many milsec in sec
    
      if(distance < 0){
        //stop timer
        clearInterval(interval.current)
      }else{
        //update timer
        //will update every sec
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000) //call every second
  }

  // const stopTimer = () => {
  //   setPause(true)
  // }

  //componentDidMount
  // useEffect(()=> {
  //   setPause(false)
  //   startTimer();
  //   return () => {
  //     clearInterval(interval.current) //stop counting down
  //   }
  // },[])
  return (
      <div className="App">
        <div className='timer'>
          <div>
            {/* <h1>Countdown Timer</h1> */}
          {/* <span className="far fa-clock"></span> */}
          <button className='btn' onClick={startTimer}>{pause ? "Pause": "Start"}</button>
          </div>
          <div>
          <section>
            <p>{timerDays}</p>
            <p>Days</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>Hours</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>Minutes</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>Seconds</p>
          </section>
          </div>
        </div>
      </div>
    );
}

export default App;
