import React from 'react';
import { Clock, Zap, Smartphone, Shield } from 'lucide-react';
import './StaticPages.css';

const About = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="page-header">
          <h1>About TimeKeeper</h1>
          <p className="page-subtitle">
            Simple, accurate, and free time tracking tools for everyone
          </p>
        </div>

        <div className="content-section">
          <h2>Our Mission</h2>
          <p>
            TimeKeeper was created to provide simple, reliable time tracking tools that anyone
            can use without unnecessary complexity. We believe that time management tools should
            be accessible, fast, and distraction-free.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Clock size={32} />
            </div>
            <h3>Accurate Timing</h3>
            <p>
              Our tools are built with precision in mind, providing accurate time tracking
              down to the millisecond.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={32} />
            </div>
            <h3>Lightning Fast</h3>
            <p>
              Optimized for speed and performance, our timers load instantly and run
              smoothly on any device.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Smartphone size={32} />
            </div>
            <h3>Mobile Friendly</h3>
            <p>
              Use our tools on any device - desktop, tablet, or smartphone with a
              responsive design.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={32} />
            </div>
            <h3>Privacy First</h3>
            <p>
              No tracking, no data collection. Your timing data stays on your device
              and is never sent to our servers.
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2>Who Uses TimeKeeper?</h2>
          <p>
            Our tools are used by students, athletes, professionals, and anyone who needs
            to track time accurately. Whether you're timing a workout, managing study sessions,
            cooking, or running presentations, TimeKeeper has you covered.
          </p>
        </div>

        <div className="content-section">
          <h2>100% Free</h2>
          <p>
            TimeKeeper is completely free to use. We support our service through ethical
            advertising that doesn't interfere with your experience. No premium plans,
            no hidden fees, no registration required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;