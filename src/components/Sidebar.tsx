
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="bg-django-green h-screen w-[350px] flex flex-col overflow-hidden fixed left-0 top-0 z-50">
      <div className="flex justify-center items-center py-8">
        <div className="w-32 h-32">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M30 20H90V90C90 90 70 100 60 100C50 100 30 90 30 90V20Z" stroke="#101010" strokeWidth="4" fill="none"/>
            <text x="32" y="45" fontFamily="Impact" fontSize="24" fill="#101010">THIS</text>
            <text x="38" y="65" fontFamily="Impact" fontSize="24" fill="#101010">IS</text>
            <text x="40" y="85" fontFamily="Impact" fontSize="28" fill="#101010">FC</text>
            <text x="40" y="110" fontFamily="Impact" fontSize="28" fill="#101010">22</text>
          </svg>
        </div>
      </div>

      <div className="flex-1 flex flex-col mt-8">
        <Link 
          to="/intro" 
          className={`nav-item ${activeLink === '/intro' ? 'bg-django-dark-green' : ''}`}
          aria-current={activeLink === '/intro' ? 'page' : undefined}
        >
          <span className="nav-item-text text-django-black">INTRO</span>
          <span className="nav-item-icon text-django-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16l4-4-4-4" />
            </svg>
          </span>
        </Link>
        
        <Link 
          to="/game-plan" 
          className={`nav-item ${activeLink === '/game-plan' ? 'bg-django-dark-green' : ''}`}
          aria-current={activeLink === '/game-plan' ? 'page' : undefined}
        >
          <span className="nav-item-text text-django-black">YOUR<br />GAME PLAN</span>
          <span className="nav-item-icon text-django-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16l4-4-4-4" />
            </svg>
          </span>
        </Link>
        
        <Link 
          to="/contact" 
          className={`nav-item ${activeLink === '/contact' ? 'bg-django-dark-green' : ''}`}
          aria-current={activeLink === '/contact' ? 'page' : undefined}
        >
          <span className="nav-item-text text-django-black">CONTACT</span>
          <span className="nav-item-icon text-django-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16l4-4-4-4" />
            </svg>
          </span>
        </Link>
        
        <Link 
          to="/shop" 
          className={`nav-item ${activeLink === '/shop' ? 'bg-django-dark-green' : ''}`}
          aria-current={activeLink === '/shop' ? 'page' : undefined}
        >
          <div className="absolute top-2 left-2 bg-django-black text-django-mint text-xs px-1 rounded">NEW</div>
          <span className="nav-item-text text-django-black">SHOP</span>
          <span className="nav-item-icon text-django-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="p-6 mb-4">
        <button className="bg-django-black w-full py-4 px-6 rounded-md font-bold text-django-green flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>I WANT TO MEET</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
