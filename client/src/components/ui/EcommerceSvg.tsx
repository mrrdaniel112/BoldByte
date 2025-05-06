import React from 'react';

export const EcommerceSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-gradient-ecommerce" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1F2833", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#0B0C10", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accent-gradient-ecommerce" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#66FCF1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#45A29E", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bg-gradient-ecommerce)" />
      
      {/* Header */}
      <rect x="100" y="50" width="600" height="70" rx="5" ry="5" fill="#0B0C10" />
      <text x="150" y="95" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#66FCF1">StoreFront</text>
      
      {/* Navigation */}
      <rect x="400" y="75" width="40" height="20" rx="5" ry="5" fill="#1F2833" />
      <rect x="460" y="75" width="40" height="20" rx="5" ry="5" fill="#1F2833" />
      <rect x="520" y="75" width="40" height="20" rx="5" ry="5" fill="#1F2833" />
      <rect x="580" y="75" width="40" height="20" rx="5" ry="5" fill="#1F2833" />
      <rect x="640" y="75" width="40" height="20" rx="5" ry="5" fill="#66FCF1" />
      
      {/* Hero Section */}
      <rect x="100" y="140" width="600" height="120" rx="5" ry="5" fill="#1F2833" />
      <text x="150" y="185" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="white">Summer Collection</text>
      <text x="150" y="220" fontFamily="Arial" fontSize="16" fill="#C5C6C7">Discover our latest fashion arrivals</text>
      <rect x="150" y="240" width="120" height="30" rx="15" ry="15" fill="url(#accent-gradient-ecommerce)" />
      <text x="210" y="260" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#0B0C10" textAnchor="middle">SHOP NOW</text>
      
      {/* Products Grid */}
      <rect x="100" y="280" width="190" height="240" rx="5" ry="5" fill="#0B0C10" />
      <rect x="110" y="290" width="170" height="140" rx="5" ry="5" fill="#1F2833" />
      <rect x="110" y="440" width="170" height="25" rx="0" ry="0" fill="#0B0C10" />
      <text x="120" y="457" fontFamily="Arial" fontSize="14" fill="white">Premium T-Shirt</text>
      <text x="120" y="478" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#66FCF1">$49.99</text>
      
      <rect x="305" y="280" width="190" height="240" rx="5" ry="5" fill="#0B0C10" />
      <rect x="315" y="290" width="170" height="140" rx="5" ry="5" fill="#1F2833" />
      <rect x="315" y="440" width="170" height="25" rx="0" ry="0" fill="#0B0C10" />
      <text x="325" y="457" fontFamily="Arial" fontSize="14" fill="white">Designer Jeans</text>
      <text x="325" y="478" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#66FCF1">$89.99</text>
      
      <rect x="510" y="280" width="190" height="240" rx="5" ry="5" fill="#0B0C10" />
      <rect x="520" y="290" width="170" height="140" rx="5" ry="5" fill="#1F2833" />
      <rect x="520" y="440" width="170" height="25" rx="0" ry="0" fill="#0B0C10" />
      <text x="530" y="457" fontFamily="Arial" fontSize="14" fill="white">Urban Sneakers</text>
      <text x="530" y="478" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#66FCF1">$129.99</text>
      
      {/* Cart Icon */}
      <circle cx="650" y="95" r="15" fill="transparent" stroke="#66FCF1" strokeWidth="2" />
      <rect x="644" y="90" width="12" height="10" rx="2" ry="2" fill="transparent" stroke="#66FCF1" strokeWidth="2" />
      <line x1="644" y1="95" x2="640" y2="105" stroke="#66FCF1" strokeWidth="2" />
      <line x1="656" y1="95" x2="660" y2="105" stroke="#66FCF1" strokeWidth="2" />
      
      {/* Accent Elements */}
      <circle cx="180" y="350" r="30" fill="url(#accent-gradient-ecommerce)" opacity="0.1" />
      <circle cx="385" y="350" r="30" fill="url(#accent-gradient-ecommerce)" opacity="0.1" />
      <circle cx="590" y="350" r="30" fill="url(#accent-gradient-ecommerce)" opacity="0.1" />
    </svg>
  );
};

export default EcommerceSvg;