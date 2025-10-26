import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/button';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
      milliseconds: String(ms).padStart(2, '0'),
    };
  };

  const timeDisplay = formatTime(time);

  return (
    <div className="timer-container">
      <div className="time-display">
        <div className="time-segment">
          <span className="time-value">{timeDisplay.hours}</span>
          <span className="time-label">Hours</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-segment">
          <span className="time-value">{timeDisplay.minutes}</span>
          <span className="time-label">Minutes</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-segment">
          <span className="time-value">{timeDisplay.seconds}</span>
          <span className="time-label">Seconds</span>
        </div>
        <span className="time-separator">.</span>
        <div className="time-segment">
          <span className="time-value time-ms">{timeDisplay.milliseconds}</span>
          <span className="time-label">MS</span>
        </div>
      </div>

      <div className="timer-controls">
        {!isRunning ? (
          <Button
            onClick={handleStart}
            size="lg"
            className="control-btn start-btn"
          >
            <Play size={20} />
            Start
          </Button>
        ) : (
          <Button
            onClick={handleStop}
            size="lg"
            variant="outline"
            className="control-btn stop-btn"
          >
            <Pause size={20} />
            Stop
          </Button>
        )}
        <Button
          onClick={handleReset}
          size="lg"
          variant="outline"
          className="control-btn reset-btn"
        >
          <RotateCcw size={20} />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;