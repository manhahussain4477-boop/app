import React from 'react';
import './StaticPages.css';

const Privacy = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p className="page-subtitle">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to TimeKeeper. We are committed to protecting your privacy and ensuring
              you have a positive experience on our website. This policy outlines our data
              collection and usage practices.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              TimeKeeper does not collect, store, or process any personal information. Our
              stopwatch and countdown timer tools run entirely in your browser, and no timing
              data is ever sent to our servers.
            </p>
            <h3>2.2 Automatically Collected Information</h3>
            <p>
              We may collect non-personal information automatically, such as:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
            <p>
              This information is collected through cookies and similar technologies and is used
              solely for improving our service and understanding how users interact with our website.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Information</h2>
            <p>The limited information we collect is used to:</p>
            <ul>
              <li>Improve and optimize our website performance</li>
              <li>Understand user behavior and preferences</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience. Cookies are small files stored
              on your device that help us remember your preferences and understand how you use
              our site.
            </p>
            <h3>4.1 Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant ads</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies
              may affect your experience on our website.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Google AdSense</h2>
            <p>
              We use Google AdSense to display advertisements on our website. Google may use
              cookies to serve ads based on your prior visits to our website or other websites.
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google's Ads Settings
              </a>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of these external sites. We encourage you to
              review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Data Security</h2>
            <p>
              Since we don't collect personal information, there's minimal risk to your privacy.
              All timer data remains on your device and is never transmitted to our servers.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our website is suitable for all ages. We do not knowingly collect personal
              information from children under 13 years of age. If you believe we have
              inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access any personal data we hold about you (though we don't collect any)</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics and advertising cookies</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted
              on this page with an updated revision date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:privacy@timekeeper.com">privacy@timekeeper.com</a>
            </p>
          </section>

          <section className="privacy-section">
            <h2>12. Consent</h2>
            <p>
              By using our website, you consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;