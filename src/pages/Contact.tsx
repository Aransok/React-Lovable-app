
import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar />
      
      <main className="flex-1 ml-[350px] p-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-django-mint font-django text-6xl mb-8">CONTACT</h1>
          
          <div className="bg-django-gray p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-django-mint text-3xl font-bold mb-6">
                  GET IN TOUCH
                </h2>
                
                <p className="text-white text-lg mb-6">
                  Have questions about our upcycling process? Want to collaborate with us? 
                  Reach out through the form or our contact details.
                </p>
                
                <div className="mt-8">
                  <div className="mb-4">
                    <h3 className="text-django-green font-bold">EMAIL</h3>
                    <p className="text-white">info@fc22upcycling.com</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-django-green font-bold">PHONE</h3>
                    <p className="text-white">+31 20 123 4567</p>
                  </div>
                  
                  <div>
                    <h3 className="text-django-green font-bold">ADDRESS</h3>
                    <p className="text-white">
                      FC22 Upcycling<br />
                      Stadionplein 1<br />
                      1076 CZ Amsterdam<br />
                      The Netherlands
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-django-green font-bold mb-2">NAME</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-django-black border border-django-dark-green rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-django-green" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-django-green font-bold mb-2">EMAIL</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-django-black border border-django-dark-green rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-django-green" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-django-green font-bold mb-2">MESSAGE</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full bg-django-black border border-django-dark-green rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-django-green" 
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-django-green text-django-black font-bold py-3 px-6 rounded hover:bg-django-dark-green transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
