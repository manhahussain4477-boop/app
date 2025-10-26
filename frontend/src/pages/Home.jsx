import React from 'react';
import Stopwatch from '../components/Stopwatch';
import CountdownTimer from '../components/CountdownTimer';
import AdSense from '../components/AdSense';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Simple & Accurate Time Tools</h1>
          <p className="hero-description">
            Track time with precision using our free stopwatch and countdown timer.
            Perfect for workouts, cooking, studying, and productivity.
          </p>
        </section>

        {/* Tools Grid */}
        <div className="tools-layout">
          <div className="tools-main">
            {/* Stopwatch */}
            <section className="tool-section">
              <h2 className="tool-title">Stopwatch</h2>
              <p className="tool-description">
                Measure elapsed time with start, stop, and reset functionality.
              </p>
              <Stopwatch />
            </section>

            {/* Countdown Timer */}
            <section className="tool-section">
              <h2 className="tool-title">Countdown Timer</h2>
              <p className="tool-description">
                Set a countdown timer in seconds and get notified when it completes.
              </p>
              <CountdownTimer />
            </section>
          </div>

          {/* Sidebar with Ad */}
          <aside className="sidebar">
            <AdSense slot="sidebar" />
            
            <div className="info-card">
              <h3>Why Use Our Timers?</h3>
              <ul>
                <li>100% Free, no registration required</li>
                <li>Works offline once loaded</li>
                <li>Mobile-friendly design</li>
                <li>Accurate to the millisecond</li>
                <li>Clean, distraction-free interface</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* SEO Content */}
        <section className="seo-section">
          <h2>Free Online Stopwatch & Countdown Timer</h2>
          <div className="seo-content">
            <div className="seo-column">
              <h3>About Our Stopwatch</h3>
              <p>
                Our online stopwatch is a simple yet powerful tool for measuring elapsed time.
                Whether you're timing a workout, tracking productivity intervals, or measuring
                cooking times, our stopwatch provides accurate timing with an easy-to-read display.
                The large digits ensure visibility from any distance, making it perfect for both
                personal and professional use.
              </p>
            </div>
            <div className="seo-column">
              <h3>About Our Countdown Timer</h3>
              <p>
                Set custom countdown timers for any activity. Simply enter the number of seconds,
                click start, and let our timer do the work. Perfect for interval training, cooking,
                presentations, or any time-based activity. The timer is accurate and reliable,
                ensuring you never miss an important moment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;