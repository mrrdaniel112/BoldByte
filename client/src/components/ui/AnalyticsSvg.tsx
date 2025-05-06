import React from 'react';

export const AnalyticsSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-gradient-analytics" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1F2833", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#0B0C10", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accent-gradient-analytics" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#45A29E", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: "#66FCF1", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bg-gradient-analytics)" />
      
      {/* Dashboard Container */}
      <rect x="80" y="50" width="640" height="500" rx="10" ry="10" fill="#0B0C10" stroke="#1F2833" strokeWidth="2" />
      
      {/* Left Sidebar */}
      <rect x="80" y="50" width="80" height="500" rx="10" ry="10" fill="#1F2833" />
      
      {/* Sidebar Icons */}
      <circle cx="120" y="90" r="15" fill="transparent" stroke="#66FCF1" strokeWidth="2" />
      <rect x="105" y="130" width="30" height="30" rx="5" ry="5" fill="transparent" stroke="#C5C6C7" strokeWidth="2" />
      <rect x="105" y="180" width="30" height="30" rx="5" ry="5" fill="transparent" stroke="#C5C6C7" strokeWidth="2" />
      <rect x="105" y="230" width="30" height="30" rx="5" ry="5" fill="#66FCF1" opacity="0.2" stroke="#66FCF1" strokeWidth="2" />
      <rect x="105" y="280" width="30" height="30" rx="5" ry="5" fill="transparent" stroke="#C5C6C7" strokeWidth="2" />
      <rect x="105" y="330" width="30" height="30" rx="5" ry="5" fill="transparent" stroke="#C5C6C7" strokeWidth="2" />
      
      {/* Header */}
      <rect x="160" y="50" width="560" height="60" rx="0" ry="0" fill="#1F2833" />
      <text x="190" y="85" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#66FCF1">SaaS Analytics Dashboard</text>
      
      {/* Top Stats Panels */}
      <rect x="180" y="130" width="150" height="80" rx="5" ry="5" fill="#1F2833" />
      <text x="200" y="160" fontFamily="Arial" fontSize="14" fill="#C5C6C7">Active Users</text>
      <text x="200" y="190" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#66FCF1">24,582</text>
      <circle cx="300" y="170" r="15" fill="url(#accent-gradient-analytics)" opacity="0.3" />
      <polyline points="285,170 295,165 305,175 315,160" fill="none" stroke="#66FCF1" strokeWidth="2" />
      
      <rect x="350" y="130" width="150" height="80" rx="5" ry="5" fill="#1F2833" />
      <text x="370" y="160" fontFamily="Arial" fontSize="14" fill="#C5C6C7">Conversion Rate</text>
      <text x="370" y="190" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#66FCF1">12.8%</text>
      <circle cx="470" y="170" r="15" fill="url(#accent-gradient-analytics)" opacity="0.3" />
      <polyline points="455,175 465,165 475,180 485,160" fill="none" stroke="#66FCF1" strokeWidth="2" />
      
      <rect x="520" y="130" width="150" height="80" rx="5" ry="5" fill="#1F2833" />
      <text x="540" y="160" fontFamily="Arial" fontSize="14" fill="#C5C6C7">Revenue</text>
      <text x="540" y="190" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#66FCF1">$48.3K</text>
      <circle cx="640" y="170" r="15" fill="url(#accent-gradient-analytics)" opacity="0.3" />
      <polyline points="625,165 635,175 645,160 655,170" fill="none" stroke="#66FCF1" strokeWidth="2" />
      
      {/* Main Chart */}
      <rect x="180" y="230" width="320" height="200" rx="5" ry="5" fill="#1F2833" />
      <text x="200" y="260" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white">User Engagement</text>
      
      {/* Chart Lines and Labels */}
      <line x1="200" y1="400" x2="480" y2="400" stroke="#C5C6C7" strokeWidth="1" opacity="0.5" />
      <text x="190" y="400" fontFamily="Arial" fontSize="10" fill="#C5C6C7" textAnchor="end">0</text>
      
      <line x1="200" y1="350" x2="480" y2="350" stroke="#C5C6C7" strokeWidth="1" opacity="0.2" />
      <text x="190" y="350" fontFamily="Arial" fontSize="10" fill="#C5C6C7" textAnchor="end">50</text>
      
      <line x1="200" y1="300" x2="480" y2="300" stroke="#C5C6C7" strokeWidth="1" opacity="0.2" />
      <text x="190" y="300" fontFamily="Arial" fontSize="10" fill="#C5C6C7" textAnchor="end">100</text>
      
      {/* X-axis Labels */}
      <text x="220" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Jan</text>
      <text x="260" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Feb</text>
      <text x="300" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Mar</text>
      <text x="340" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Apr</text>
      <text x="380" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">May</text>
      <text x="420" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Jun</text>
      <text x="460" y="415" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Jul</text>
      
      {/* Chart Data */}
      <polyline 
        points="220,380 260,350 300,370 340,330 380,310 420,290 460,320" 
        fill="none" 
        stroke="#66FCF1" 
        strokeWidth="2" 
      />
      
      <path 
        d="M220,380 L260,350 L300,370 L340,330 L380,310 L420,290 L460,320 L460,400 L220,400 Z" 
        fill="url(#chart-gradient)" 
      />
      
      {/* Data Points */}
      <circle cx="220" cy="380" r="4" fill="#66FCF1" />
      <circle cx="260" cy="350" r="4" fill="#66FCF1" />
      <circle cx="300" cy="370" r="4" fill="#66FCF1" />
      <circle cx="340" cy="330" r="4" fill="#66FCF1" />
      <circle cx="380" cy="310" r="4" fill="#66FCF1" />
      <circle cx="420" cy="290" r="4" fill="#66FCF1" />
      <circle cx="460" cy="320" r="4" fill="#66FCF1" />
      
      {/* Secondary Charts */}
      <rect x="520" y="230" width="150" height="90" rx="5" ry="5" fill="#1F2833" />
      <text x="540" y="260" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">Traffic Sources</text>
      
      {/* Donut Chart */}
      <circle cx="595" cy="300" r="25" fill="#0B0C10" />
      <circle cx="595" cy="300" r="25" fill="transparent" stroke="#66FCF1" strokeWidth="10" strokeDasharray="110 157" />
      <circle cx="595" cy="300" r="25" fill="transparent" stroke="#45A29E" strokeWidth="10" strokeDasharray="47 157" strokeDashoffset="-47" />
      <circle cx="595" cy="300" r="25" fill="transparent" stroke="#C5C6C7" strokeWidth="10" strokeDasharray="47 157" strokeDashoffset="-94" />
      <text x="595" y="305" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">70%</text>
      
      {/* Legend */}
      <rect x="530" y="340" width="10" height="10" fill="#66FCF1" />
      <text x="545" y="350" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Organic</text>
      
      <rect x="590" y="340" width="10" height="10" fill="#45A29E" />
      <text x="605" y="350" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Social</text>
      
      <rect x="650" y="340" width="10" height="10" fill="#C5C6C7" />
      <text x="665" y="350" fontFamily="Arial" fontSize="10" fill="#C5C6C7">Direct</text>
      
      {/* Bottom Panel */}
      <rect x="520" y="340" width="150" height="90" rx="5" ry="5" fill="#1F2833" />
      <text x="540" y="370" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">Devices</text>
      
      {/* Bar Chart */}
      <rect x="540" y="390" width="30" height="25" fill="#66FCF1" />
      <rect x="580" y="380" width="30" height="35" fill="#66FCF1" opacity="0.7" />
      <rect x="620" y="400" width="30" height="15" fill="#66FCF1" opacity="0.4" />
      
      <text x="555" y="425" fontFamily="Arial" fontSize="10" fill="#C5C6C7" textAnchor="middle">Mobile</text>
      <text x="595" y="425" fontFamily="Arial" fontSize="10" fill="#C5C6C7" textAnchor="middle">Desktop</text>
      <text x="635" y="425" fontFamily="Arial" fontSize="10" fill="#C5C6C7" textAnchor="middle">Tablet</text>
      
      {/* Alerts Panel */}
      <rect x="180" y="450" width="490" height="80" rx="5" ry="5" fill="#1F2833" />
      <text x="200" y="480" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white">Recent Alerts</text>
      
      <circle cx="200" cy="505" r="5" fill="#66FCF1" />
      <text x="215" y="510" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Traffic spike detected on landing page (10:45 AM)</text>
      
      <circle cx="450" cy="505" r="5" fill="#66FCF1" opacity="0.6" />
      <text x="465" y="510" fontFamily="Arial" fontSize="12" fill="#C5C6C7">Conversion goal reached (09:30 AM)</text>
    </svg>
  );
};

export default AnalyticsSvg;