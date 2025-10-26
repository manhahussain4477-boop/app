import React from 'react';
import './AdSense.css';

const AdSense = ({ slot }) => {
  const getAdSize = () => {
    switch (slot) {
      case 'header':
        return { width: '100%', height: '90px' };
      case 'sidebar':
        return { width: '300px', height: '250px' };
      case 'footer':
        return { width: '100%', height: '90px' };
      default:
        return { width: '100%', height: '90px' };
    }
  };

  const size = getAdSize();

  return (
    <div className={`adsense-container adsense-${slot}`}>
      <div className="adsense-placeholder" style={size}>
        <span className="adsense-label">Advertisement</span>
        <span className="adsense-info">Google AdSense Placeholder ({slot})</span>
        {/* Replace with actual AdSense code after approval */}
        {/* <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins> */}
      </div>
    </div>
  );
};

export default AdSense;