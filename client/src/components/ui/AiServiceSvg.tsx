import React from 'react';

export const AiServiceSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-gradient-ai" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1F2833", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#0B0C10", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accent-gradient-ai" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#45A29E", stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#66FCF1", stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bg-gradient-ai)" />
      
      {/* Main Panel */}
      <rect x="100" y="80" width="600" height="440" rx="10" ry="10" fill="#0B0C10" stroke="#1F2833" strokeWidth="2" />
      
      {/* Header */}
      <rect x="100" y="80" width="600" height="70" rx="10" ry="10" fill="#1F2833" />
      <text x="150" y="125" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#66FCF1">AI Customer Service Hub</text>
      
      {/* Left Panel - Chat List */}
      <rect x="100" y="150" width="200" height="370" fill="#0B0C10" />
      
      {/* Chat Items */}
      <rect x="110" y="170" width="180" height="60" rx="5" ry="5" fill="#1F2833" />
      <circle cx="135" y="200" r="15" fill="#0B0C10" stroke="#66FCF1" strokeWidth="2" />
      <text x="170" y="195" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">Sarah Chen</text>
      <text x="170" y="215" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Order #45892 inquiry</text>
      
      <rect x="110" y="240" width="180" height="60" rx="5" ry="5" fill="#1F2833" />
      <circle cx="135" y="270" r="15" fill="#0B0C10" stroke="#66FCF1" strokeWidth="2" />
      <text x="170" y="265" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">Michael Johnson</text>
      <text x="170" y="285" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Return policy question</text>
      
      <rect x="110" y="310" width="180" height="60" rx="5" ry="5" fill="#66FCF1" opacity="0.2" />
      <circle cx="135" y="340" r="15" fill="#0B0C10" stroke="#66FCF1" strokeWidth="2" />
      <text x="170" y="335" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">Jamie Smith</text>
      <text x="170" y="355" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Product availability</text>
      
      <rect x="110" y="380" width="180" height="60" rx="5" ry="5" fill="#1F2833" />
      <circle cx="135" y="410" r="15" fill="#0B0C10" stroke="#66FCF1" strokeWidth="2" />
      <text x="170" y="405" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">Rebecca Liu</text>
      <text x="170" y="425" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Payment issue</text>
      
      {/* Right Panel - Chat */}
      <rect x="300" y="150" width="400" height="330" fill="#1F2833" />
      
      {/* Chat Header */}
      <rect x="300" y="150" width="400" height="50" fill="#0B0C10" />
      <text x="330" y="180" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white">Jamie Smith</text>
      <circle cx="680" y="175" r="10" fill="transparent" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="650" y="175" r="10" fill="transparent" stroke="#66FCF1" strokeWidth="2" />
      
      {/* Chat Messages */}
      <rect x="320" y="220" width="240" height="50" rx="10" ry="10" fill="#0B0C10" />
      <text x="335" y="245" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Hi, I'd like to know if you have the</text>
      <text x="335" y="260" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Urban Sneakers in size 10?</text>
      
      <rect x="440" y="280" width="240" height="70" rx="10" ry="10" fill="#66FCF1" opacity="0.2" />
      <text x="455" y="305" fontFamily="Arial" fontSize="12" fill="white">Hello Jamie! Let me check our inventory</text>
      <text x="455" y="320" fontFamily="Arial" fontSize="12" fill="white">for Urban Sneakers in size 10. One</text>
      <text x="455" y="335" fontFamily="Arial" fontSize="12" fill="white">moment please...</text>
      
      <rect x="440" y="360" width="240" height="70" rx="10" ry="10" fill="#66FCF1" opacity="0.2" />
      <text x="455" y="385" fontFamily="Arial" fontSize="12" fill="white">Great news! We have Urban Sneakers</text>
      <text x="455" y="400" fontFamily="Arial" fontSize="12" fill="white">in size 10 available in both black and</text>
      <text x="455" y="415" fontFamily="Arial" fontSize="12" fill="white">white colors. Would you like to order?</text>
      
      {/* Chat Input */}
      <rect x="300" y="480" width="400" height="40" rx="20" ry="20" fill="#0B0C10" />
      <text x="330" y="505" fontFamily="Arial" fontSize="14" fill="#C5C6C7">Type a message...</text>
      <circle cx="660" y="500" r="15" fill="url(#accent-gradient-ai)" />
      
      {/* AI Processing Animation */}
      <circle cx="400" y="240" r="80" fill="url(#pulse-gradient)" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Neural Network Nodes */}
      <circle cx="370" y="210" r="5" fill="#66FCF1" opacity="0.7" />
      <circle cx="420" y="190" r="5" fill="#66FCF1" opacity="0.7" />
      <circle cx="390" y="250" r="5" fill="#66FCF1" opacity="0.7" />
      <circle cx="440" y="230" r="5" fill="#66FCF1" opacity="0.7" />
      <circle cx="410" y="280" r="5" fill="#66FCF1" opacity="0.7" />
      <circle cx="360" y="260" r="5" fill="#66FCF1" opacity="0.7" />
      
      {/* Neural Network Connections */}
      <line x1="370" y1="210" x2="420" y2="190" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="370" y1="210" x2="390" y2="250" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="370" y1="210" x2="360" y2="260" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="420" y1="190" x2="440" y2="230" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="420" y1="190" x2="390" y2="250" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="390" y1="250" x2="440" y2="230" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="390" y1="250" x2="410" y2="280" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="390" y1="250" x2="360" y2="260" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="440" y1="230" x2="410" y2="280" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
      <line x1="360" y1="260" x2="410" y2="280" stroke="#66FCF1" strokeWidth="1" opacity="0.3" />
    </svg>
  );
};

export default AiServiceSvg;