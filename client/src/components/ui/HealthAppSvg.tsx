import React from 'react';

export const HealthAppSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#253A47", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#1B2431", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#45A29E", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bg-gradient)" />
      
      {/* Phone outline */}
      <rect x="250" y="50" width="300" height="500" rx="25" ry="25" fill="#0B0C10" stroke="#66FCF1" strokeWidth="2" />
      
      {/* Screen */}
      <rect x="270" y="70" width="260" height="460" rx="10" ry="10" fill="#1F2833" />
      
      {/* App Header */}
      <rect x="270" y="70" width="260" height="70" rx="10" ry="10" fill="#0B0C10" />
      <text x="400" y="110" fontFamily="Arial" fontSize="22" fill="#66FCF1" textAnchor="middle">HealthTrack Pro</text>
      
      {/* Heart rate monitor */}
      <polyline points="290,190 310,190 320,130 330,240 340,180 350,200 360,190 380,190" 
                fill="none" stroke="url(#accent-gradient)" strokeWidth="3" />
      
      {/* Stats Panels */}
      <rect x="290" y="250" width="220" height="70" rx="10" ry="10" fill="#0B0C10" />
      <text x="320" y="280" fontFamily="Arial" fontSize="14" fill="#C5C6C7">Daily Steps</text>
      <text x="320" y="305" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#66FCF1">12,456</text>
      
      <rect x="290" y="330" width="105" height="70" rx="10" ry="10" fill="#0B0C10" />
      <text x="342" y="360" fontFamily="Arial" fontSize="14" fill="#C5C6C7" textAnchor="middle">Heart Rate</text>
      <text x="342" y="385" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#66FCF1" textAnchor="middle">76 BPM</text>
      
      <rect x="405" y="330" width="105" height="70" rx="10" ry="10" fill="#0B0C10" />
      <text x="457" y="360" fontFamily="Arial" fontSize="14" fill="#C5C6C7" textAnchor="middle">Sleep</text>
      <text x="457" y="385" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#66FCF1" textAnchor="middle">7h 42m</text>
      
      {/* Activity Circles */}
      <circle cx="400" cy="455" r="30" fill="none" stroke="#66FCF1" strokeWidth="4" />
      <circle cx="400" cy="455" r="30" fill="none" stroke="#1F2833" strokeWidth="4" strokeDasharray="189" strokeDashoffset="60" />
      <text x="400" y="460" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#66FCF1" textAnchor="middle">75%</text>
      
      {/* Bottom Navigation */}
      <rect x="270" y="500" width="260" height="30" rx="0" ry="0" fill="#0B0C10" />
      <circle cx="320" cy="515" r="10" fill="#45A29E" />
      <circle cx="400" cy="515" r="10" fill="#66FCF1" />
      <circle cx="480" cy="515" r="10" fill="#45A29E" />
      
      {/* Home Button */}
      <circle cx="400" cy="550" r="15" fill="none" stroke="#66FCF1" strokeWidth="2" />
    </svg>
  );
};

export default HealthAppSvg;