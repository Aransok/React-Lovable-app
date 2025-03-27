
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-django-black">
      <div className="text-center">
        <h1 className="text-django-mint font-django text-9xl mb-4">404</h1>
        <p className="text-django-green text-xl mb-8">Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-django-green text-django-black px-6 py-3 rounded-md font-bold hover:bg-django-dark-green transition-all duration-300"
        >
          <span className="mr-2">BACK TO HOME</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
