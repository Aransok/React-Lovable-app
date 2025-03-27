
import { useEffect, useState } from 'react';

const Header = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = [
    'Currently upcycling.',
    'First upcycled collection made of running gear',
    'FC UTRECHT | From outdated sponsor logo to upcycled bags',
    'BRIGHTON & HOVE ALBION FC | New upcycled collection online now',
    'KNVB | Official partner'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-django-gray py-3 px-4 overflow-hidden">
      <div className="relative h-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`absolute w-full transition-all duration-500 ease-in-out ${
              index === currentMessage 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-django-green text-sm font-medium">
              {message}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
