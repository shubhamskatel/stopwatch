import React from "react";
import { useSelector } from "react-redux";
import { formatTime } from "../utils/FormatTime";

const Laps = () => {
  const laps = useSelector((state: any) => state?.stopwatch?.laps);
  return (
    <div>
      {laps?.map((lap: number, index: number) => (
        <div key={index}>{formatTime(lap)}</div>
      ))}
    </div>
  );
};

export default Laps;
