
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CountdownTimer from '../components/CountdownTimer';
import SkipIntro from '../components/SkipIntro';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Add scroll event for vertical text
    const scrollElement = document.getElementById('scroll-element');
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        navigate('/intro');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      <Sidebar />
      
      <main className="flex-1 ml-[350px] pt-16 overflow-y-auto">
        <CountdownTimer />
        <SkipIntro />
        
        <div className="fixed right-4 bottom-0 h-[400px]" id="scroll-element">
          <div className="vertical-text text-gray-400 text-sm tracking-widest">
            Scroll to see more...
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
