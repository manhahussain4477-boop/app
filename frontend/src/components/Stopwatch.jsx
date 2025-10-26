import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Flag } from 'lucide-react';
import { Button } from '../components/ui/button';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element for click sound
    audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAKLVLS';
  }, []);

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

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleStart = () => {
    setIsRunning(true);
    playSound();
  };

  const handleStop = () => {
    setIsRunning(false);
    playSound();
  };

  const handleLap = () => {
    if (isRunning && time > 0) {
      const lapTime = {
        id: laps.length + 1,
        time: time,
        timestamp: Date.now()
      };
      setLaps([lapTime, ...laps]);
      playSound();
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    playSound();
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

  const formatLapTime = (milliseconds) => {
    const time = formatTime(milliseconds);
    return `${time.hours}:${time.minutes}:${time.seconds}.${time.milliseconds}`;
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
          onClick={handleLap}
          size="lg"
          variant="outline"
          className="control-btn lap-btn"
          disabled={!isRunning || time === 0}
        >
          <Flag size={20} />
          Lap
        </Button>
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

      {laps.length > 0 && (
        <div className="laps-container">
          <h3 className="laps-title">Laps</h3>
          <div className="laps-list">
            {laps.map((lap) => (
              <div key={lap.id} className="lap-item">
                <span className="lap-number">Lap {lap.id}</span>
                <span className="lap-time">{formatLapTime(lap.time)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;