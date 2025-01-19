import React,{useState} from 'react';
import './index.css';
import ShoeList from './components/ShoeList';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar'


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  const removeFromCart = (shoeId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


return (
  <div className="app">
     <Navbar />
    <ShoeList addToCart={addToCart}/>
    <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
   
  </div>
);
}; 

export default App;