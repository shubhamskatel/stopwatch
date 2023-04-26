import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addLap, resetLaps } from "../Redux/reducers/reducer";
import Button from "../components/Button";
import Laps from "../components/Laps";
import Timer from "../components/Timer";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const dispatch = useDispatch();

  ////////////////////////////
  ////////////////// FUNCTIONS

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

  const handleReset = () => {
    dispatch(resetLaps());
    setTimerRunning(false);
    setTime(0);
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  };

  const handleLap = () => {
    dispatch(addLap(time));
  };

  return (
    <>
      <div className="stopwatch">
        <h2>STOPWATCH</h2>
        <Timer time={time} />
        <div className="button-group">
          {timerRunning ? (
            <Button onClick={handlePause} classValue="button-pause">
              Pause
            </Button>
          ) : (
            <Button onClick={handleStart} classValue="button-start">
              Start
            </Button>
          )}

          {timerRunning ? (
            <Button onClick={handleLap} classValue="button-lap">
              Lap
            </Button>
          ) : (
            <Button onClick={handleReset} classValue="button-reset">
              Reset
            </Button>
          )}
        </div>

        <br />

        <div>
          <Laps />
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
