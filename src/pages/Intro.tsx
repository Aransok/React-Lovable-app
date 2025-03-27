
import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Intro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar />
      
      <main className="flex-1 ml-[350px] p-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-django-mint font-django text-6xl mb-8">INTRO</h1>
          
          <div className="bg-django-gray p-8 rounded-lg">
            <h2 className="text-django-mint text-3xl font-bold mb-4">
              UPCYCLING FOR THE FUTURE OF FOOTBALL
            </h2>
            
            <p className="text-white text-lg mb-6">
              Welcome to FC22, where we transform outdated football gear into sustainable, stylish products.
              Our mission is to reduce waste in the sports industry while creating unique items that celebrate 
              the heritage of football clubs.
            </p>
            
            <p className="text-white text-lg mb-6">
              Through our partnerships with clubs like FC Utrecht, Brighton & Hove Albion FC, and the KNVB,
              we're changing how football approaches sustainability.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-django-black p-6 rounded-lg">
                <h3 className="text-django-green font-bold text-xl mb-3">SUSTAINABLE</h3>
                <p className="text-white">We turn potential waste into desirable products, reducing the environmental impact of football merchandise.</p>
              </div>
              
              <div className="bg-django-black p-6 rounded-lg">
                <h3 className="text-django-green font-bold text-xl mb-3">AUTHENTIC</h3>
                <p className="text-white">Each item tells a story, preserving the heritage and memories of your favorite club.</p>
              </div>
              
              <div className="bg-django-black p-6 rounded-lg">
                <h3 className="text-django-green font-bold text-xl mb-3">INNOVATIVE</h3>
                <p className="text-white">Our design approach combines functionality with style, creating truly unique football-inspired products.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Intro;
