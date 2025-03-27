
import { Link } from 'react-router-dom';

const SkipIntro = () => {
  return (
    <Link 
      to="/intro" 
      className="fixed top-36 right-8 bg-django-gray bg-opacity-60 backdrop-blur-sm 
                text-django-mint px-6 py-3 rounded-md transition-all 
                duration-300 hover:bg-opacity-80 font-bold flex items-center"
    >
      <span className="mr-2">SKIP INTRO</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
};

export default SkipIntro;
