import React, { useEffect, useRef, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setTimerRunning(true);
    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handlePause = () => {
    setTimerRunning(false);
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const handleReset = () => {
    setLaps([]);
    setTimerRunning(false);
    setTime(0);
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  };

  useEffect(() => {
    console.log(laps);
  }, [laps]);

  const formatTime = (timeInMilliseconds: number): string => {
    const timeInSeconds = timeInMilliseconds / 1000;
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor(
      (timeInSeconds - Math.floor(timeInSeconds)) * 100
    )
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <>
      <div className="stopwatch">
        <h2>STOPWATCH</h2>
        <h3>{formatTime(time)}</h3>
        <div className="button-group">
          {timerRunning ? (
            <button className="stop-button" onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button className="start-button" onClick={handleStart}>
              Start
            </button>
          )}

          {timerRunning ? (
            <button className="lap-button" onClick={handleLap}>
              Lap
            </button>
          ) : (
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          )}
        </div>
        <br />
        <div>
          {laps.map((lap: number, index: number) => (
            <div key={index}>{formatTime(lap)}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
