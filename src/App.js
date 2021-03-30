import { useState, useRef } from "react";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [onPause, setOnPause] = useState(false);

  const increament = useRef(0);

  const startTimer = () => {
    setOnPause(true);
    increament.current = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);
  };
  const stopTimer = () => {
    setOnPause(false);
    clearInterval(increament.current);
    setSeconds(0);
  };

  const resetTimer = () => {
    setSeconds(0);
  };
  const pauseTimer = () => {
    clearInterval(increament.current);
    setOnPause(false);
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
