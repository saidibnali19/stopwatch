import React, { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  let secondsPassed = 0;
  if (startTime !== null && now !== null)
    secondsPassed = (now - startTime) / 1000;

  function handleStart() {
    // Start counting
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      // Update the current time every 10ms
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <p>Time passed: {secondsPassed.toFixed(3)}</p>
      <div className="stopwatch-buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
}
