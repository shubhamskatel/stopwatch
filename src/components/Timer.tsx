import React from "react";
import { formatTime } from "../utils/FormatTime";

interface Props {
  time: number;
}

const Timer = ({ time }: Props) => {
  return (
    <div>
      <h3>{formatTime(time)}</h3>
    </div>
  );
};

export default Timer;
