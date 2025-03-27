
import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const GamePlan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar />
      
      <main className="flex-1 ml-[350px] p-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-django-mint font-django text-6xl mb-8">YOUR GAME PLAN</h1>
          
          <div className="bg-django-gray p-8 rounded-lg">
            <h2 className="text-django-mint text-3xl font-bold mb-6">
              HOW TO EXTEND THE LIFE OF YOUR FOOTBALL GEAR
            </h2>
            
            <div className="space-y-8">
              <div className="bg-django-black p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-django-green text-django-black font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-django-green font-bold text-xl mb-2">PROPER CLEANING</h3>
                    <p className="text-white">Always follow the care instructions for your jerseys and equipment. Most synthetic jerseys should be washed in cold water and air-dried to prevent damage to colors and materials.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-django-black p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-django-green text-django-black font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-django-green font-bold text-xl mb-2">STORAGE SOLUTIONS</h3>
                    <p className="text-white">Store your gear in a cool, dry place away from direct sunlight. For jerseys, hang them rather than folding to prevent permanent creases.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-django-black p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-django-green text-django-black font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-django-green font-bold text-xl mb-2">ROTATION SYSTEM</h3>
                    <p className="text-white">If you have multiple kits, establish a rotation system for match days and training sessions to distribute wear and tear evenly.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-django-black p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-django-green text-django-black font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-django-green font-bold text-xl mb-2">UPCYCLING OPPORTUNITIES</h3>
                    <p className="text-white">When your gear is truly at the end of its playing life, consider our upcycling program to transform it into something new and useful.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamePlan;
