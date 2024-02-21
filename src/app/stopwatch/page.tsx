"use client";
import React, { useRef, useState } from "react";

function StopWatch(): JSX.Element {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | NodeJS.Timeout | null>(null);

  const handleStart = () => {
    const currentTime = Date.now();
    setNow(currentTime);
    setStartTime(currentTime);
    if (intervalRef.current !== null)
      clearInterval(intervalRef.current as NodeJS.Timeout);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let a = 0;
  if (startTime !== null && now !== null) {
    a = (now - startTime) / 1000;
  }

  return (
    <>
      <div>StopWatch : {a.toFixed(3)}</div>
      <button onClick={handleStart}>Start</button>
    </>
  );
}

export default StopWatch;
