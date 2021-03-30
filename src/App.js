import { useState, useRef } from "react";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [onPause, setOnPause] = useState(true);

  const increament = useRef(0);

  const startTimer = () => {
    setOnPause(false);
    increament.current = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);
  };
  const stopTimer = () => {
    setOnPause(true);
    clearInterval(increament.current);
    setSeconds(0);
  };

  const resetTimer = () => {
    if (onPause) {
      setSeconds(0);
      startTimer();
    }
    setSeconds(0);
  };
  const pauseTimer = () => {
    clearInterval(increament.current);
    setOnPause(true);
  };

  return (
    <>
      <TimerDisplay
        seconds={seconds}
        startTimer={startTimer}
        stopTimer={stopTimer}
        onPause={onPause}
        resetTimer={resetTimer}
        pauseTimer={pauseTimer}
      />
    </>
  );
}

export default App;
