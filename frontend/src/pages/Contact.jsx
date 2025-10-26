import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import './StaticPages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    // For now, just show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="static-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p className="page-subtitle">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-block">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <h3>Email Us</h3>
              <p>contact@timekeeper.com</p>
              <p className="info-note">We typically respond within 24-48 hours</p>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <MessageSquare size={24} />
              </div>
              <h3>Feedback</h3>
              <p>
                We're constantly improving TimeKeeper based on user feedback. Share your
                ideas and help us make our tools better.
              </p>
            </div>

            <div className="info-block">
              <h3>Common Questions</h3>
              <ul className="faq-list">
                <li>How accurate are the timers? - Accurate to 10ms</li>
                <li>Do timers work offline? - Yes, once loaded</li>
                <li>Is registration required? - No, completely free</li>
                <li>Do you collect data? - No personal data collected</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="submit-btn">
                <Send size={20} />
                Send Message
              </Button>

              {submitted && (
                <div className="success-message">
                  Thank you! Your message has been received. We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;