import React from 'react';

export const BlockchainSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-gradient-blockchain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1F2833", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#0B0C10", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accent-gradient-blockchain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#45A29E", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bg-gradient-blockchain)" />
      
      {/* Blockchain nodes */}
      <circle cx="150" cy="150" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="300" cy="100" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="450" cy="150" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="600" cy="100" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="200" cy="300" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="400" cy="250" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="550" cy="300" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="150" cy="450" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="300" cy="500" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="450" cy="450" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="600" cy="500" r="40" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
      
      {/* Blockchain connections */}
      <line x1="150" y1="150" x2="300" y2="100" stroke="#45A29E" strokeWidth="2" />
      <line x1="300" y1="100" x2="450" y2="150" stroke="#45A29E" strokeWidth="2" />
      <line x1="450" y1="150" x2="600" y2="100" stroke="#45A29E" strokeWidth="2" />
      <line x1="150" y1="150" x2="200" y2="300" stroke="#45A29E" strokeWidth="2" />
      <line x1="300" y1="100" x2="200" y2="300" stroke="#45A29E" strokeWidth="2" />
      <line x1="300" y1="100" x2="400" y2="250" stroke="#45A29E" strokeWidth="2" />
      <line x1="450" y1="150" x2="400" y2="250" stroke="#45A29E" strokeWidth="2" />
      <line x1="450" y1="150" x2="550" y2="300" stroke="#45A29E" strokeWidth="2" />
      <line x1="600" y1="100" x2="550" y2="300" stroke="#45A29E" strokeWidth="2" />
      <line x1="200" y1="300" x2="150" y2="450" stroke="#45A29E" strokeWidth="2" />
      <line x1="200" y1="300" x2="300" y2="500" stroke="#45A29E" strokeWidth="2" />
      <line x1="400" y1="250" x2="300" y2="500" stroke="#45A29E" strokeWidth="2" />
      <line x1="400" y1="250" x2="450" y2="450" stroke="#45A29E" strokeWidth="2" />
      <line x1="550" y1="300" x2="450" y2="450" stroke="#45A29E" strokeWidth="2" />
      <line x1="550" y1="300" x2="600" y2="500" stroke="#45A29E" strokeWidth="2" />
      <line x1="150" y1="450" x2="300" y2="500" stroke="#45A29E" strokeWidth="2" />
      <line x1="300" y1="500" x2="450" y2="450" stroke="#45A29E" strokeWidth="2" />
      <line x1="450" y1="450" x2="600" y2="500" stroke="#45A29E" strokeWidth="2" />
      
      {/* Blockchain data blocks */}
      <rect x="125" y="135" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="275" y="85" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="425" y="135" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="575" y="85" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="175" y="285" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="375" y="235" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="525" y="285" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="125" y="435" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="275" y="485" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="425" y="435" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      <rect x="575" y="485" width="50" height="30" rx="5" ry="5" fill="#0B0C10" />
      
      {/* Accent elements */}
      <circle cx="150" cy="150" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="300" cy="100" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="450" cy="150" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="600" cy="100" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="200" cy="300" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="400" cy="250" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="550" cy="300" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="150" cy="450" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="300" cy="500" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="450" cy="450" r="5" fill="url(#accent-gradient-blockchain)" />
      <circle cx="600" cy="500" r="5" fill="url(#accent-gradient-blockchain)" />
      
      {/* Title */}
      <text x="400" y="40" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#66FCF1" textAnchor="middle">SupplyVerify Blockchain System</text>
      
      {/* Subtitle */}
      <text x="400" y="70" fontFamily="Arial" fontSize="16" fill="#C5C6C7" textAnchor="middle">Transparent Supply Chain Verification</text>
    </svg>
  );
};

export default BlockchainSvg;