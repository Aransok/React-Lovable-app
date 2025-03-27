
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [daysLeft, setDaysLeft] = useState(48);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simulate countdown calculation
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysLeft);
    
    // Animation delay for entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col items-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative mb-8">
        <img 
          src="/lovable-uploads/1bd976e4-89e5-4f63-bf96-96d4c378aaec.png" 
          alt="Football Equipment" 
          className="w-[90%] max-w-[600px] mx-auto mt-12 object-contain"
          style={{ filter: 'brightness(0.9)' }}
        />
        
        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_1)">
                <path d="M60 20C37.909 20 20 37.909 20 60C20 82.091 37.909 100 60 100C82.091 100 100 82.091 100 60C100 37.909 82.091 20 60 20Z" fill="#101010"/>
              </g>
              <text x="40" y="55" fontFamily="Impact" fontSize="14" fill="#D1EEB9">KICK-OFF</text>
              <text x="40" y="75" fontFamily="Impact" fontSize="14" fill="#D1EEB9">WHISTLE</text>
              <path d="M35 60 Q42 50 45 65 Q48 75 55 65" stroke="#D1EEB9" strokeWidth="2" fill="none"/>
              <path d="M60 40 Q65 45 70 50" stroke="#D1EEB9" strokeWidth="2" fill="none"/>
              <path d="M65 35 Q70 40 75 45" stroke="#D1EEB9" strokeWidth="2" fill="none"/>
              <defs>
                <filter id="filter0_d_1_1" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <div className="countdown-digit">{Math.floor(daysLeft / 10)}</div>
          <div className="countdown-digit">{daysLeft % 10}</div>
        </div>

        <div className="text-django-mint font-django text-[6rem] leading-[6rem] tracking-tight mt-[-20px]">
          DAYS TILL<br />
          THE NEXT<br />
          SEASON
        </div>

        <div className="mt-12 text-django-mint max-w-xl px-4 text-left">
          <p className="text-3xl font-bold mb-6">
            BUT BEFORE THE LAUNCH OF NEW GEAR,<br />
            LET'S TAKE GOOD CARE OF YOUR SOON<br />
            TO-BE 'OLD' FAVOURITES.
          </p>
          
          <div className="mt-16 text-django-mint text-6xl font-django">
            <span className="mr-4">RIO</span> <span className="opacity-40">♥</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
