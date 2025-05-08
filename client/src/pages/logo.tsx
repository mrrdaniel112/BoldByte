import { useEffect } from 'react';
import BoldbyteLogoSvg from '../assets/boldbyte-logo.svg';

export default function Logo() {
  useEffect(() => {
    document.title = "BOLDBYTE Logo";
  }, []);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = BoldbyteLogoSvg;
    link.download = 'boldbyte-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-8">BOLDBYTE Logo</h1>
      
      <div className="bg-[#1F2833] p-8 rounded-xl mb-8 shadow-xl">
        <img 
          src={BoldbyteLogoSvg} 
          alt="BOLDBYTE Logo" 
          className="w-full max-w-md"
        />
      </div>
      
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-[#66FCF1] text-[#0B0C10] rounded-lg font-bold hover:bg-[#45A29E] transition-colors"
        >
          Download SVG
        </button>
        
        <div className="bg-[#1F2833] p-4 rounded-lg max-w-lg">
          <h3 className="text-white font-semibold mb-2">Brand Colors:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#0B0C10] mr-2 border border-gray-600"></div>
              <span className="text-white">Primary Dark: #0B0C10</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#1F2833] mr-2 border border-gray-600"></div>
              <span className="text-white">Secondary Dark: #1F2833</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#66FCF1] mr-2"></div>
              <span className="text-white">Accent: #66FCF1</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white mr-2"></div>
              <span className="text-white">Text: #FFFFFF</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#C5C6C7] mr-2"></div>
              <span className="text-white">Muted Text: #C5C6C7</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}