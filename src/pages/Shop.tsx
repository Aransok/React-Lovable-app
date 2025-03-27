
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "FC Utrecht Tote Bag",
      price: "€49.95",
      image: "https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?auto=format&fit=crop&q=80&w=400&h=400",
      description: "Upcycled from 2019/20 home kit"
    },
    {
      id: 2,
      name: "Brighton Drawstring Backpack",
      price: "€39.95",
      image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=400&h=400",
      description: "Made from 2020/21 away jerseys"
    },
    {
      id: 3,
      name: "KNVB Pencil Case",
      price: "€19.95",
      image: "https://images.unsplash.com/photo-1544816155-12df9a7c8c34?auto=format&fit=crop&q=80&w=400&h=400",
      description: "Created from training bibs"
    },
    {
      id: 4,
      name: "Utrecht Wallet",
      price: "€29.95",
      image: "https://images.unsplash.com/photo-1604006852748-903fccbc4019?auto=format&fit=crop&q=80&w=400&h=400",
      description: "Upcycled from match-worn jerseys"
    }
  ]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar />
      
      <main className="flex-1 ml-[350px] p-12 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <h1 className="text-django-mint font-django text-6xl">SHOP</h1>
            <div className="ml-4 px-3 py-1 bg-django-green text-django-black rounded-md text-sm font-bold">NEW</div>
          </div>
          
          <div className="bg-django-gray p-8 rounded-lg">
            <h2 className="text-django-mint text-3xl font-bold mb-6">
              UPCYCLED FOOTBALL PRODUCTS
            </h2>
            
            <p className="text-white text-lg mb-8">
              Each item is uniquely crafted from authentic football gear, giving it a second life
              and reducing waste. Limited quantities available for each product.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-django-black rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-django-green font-bold text-xl mb-1">{product.name}</h3>
                    <p className="text-white text-sm mb-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-django-mint font-bold text-xl">{product.price}</span>
                      <button className="bg-django-green text-django-black px-4 py-2 rounded font-bold text-sm hover:bg-django-dark-green transition-colors duration-300">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-transparent border-2 border-django-green text-django-green font-bold py-3 px-8 rounded-md hover:bg-django-green hover:text-django-black transition-all duration-300 text-lg">
                VIEW ALL PRODUCTS
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
