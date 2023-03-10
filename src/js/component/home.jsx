import React, { useState, useEffect } from "react";
import ClockDigits from "./ClockDigits.jsx";

//include images into your bundle

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  const singleDigit = Math.floor((seconds / 1) % 10);
  const tensDigit = Math.floor((seconds / 10) % 10);
  const hundredsDigit = Math.floor((seconds / 100) % 10);
  const thousandsDigit = Math.floor((seconds / 1000) % 10);
  const tenthousandsDigit = Math.floor((seconds / 10000) % 10);
  const hundredthousandsDigit = Math.floor((seconds / 100000) % 10);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });

  return (
    <div className="d-flex flex-row clock-BG">
      <div className="clock-indices">
        <h1>
          <i class="fas fa-clock"></i>
        </h1>
      </div>
	  <ClockDigits value={hundredthousandsDigit}/>
	  <ClockDigits value={tenthousandsDigit}/>
      <ClockDigits value={thousandsDigit}/>
      <ClockDigits value={hundredsDigit}/>
      <ClockDigits value={tensDigit}/>
      <ClockDigits value={singleDigit}/>
    </div>
  );
};

export default Home;
