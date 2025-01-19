import React from 'react';

const ShoppingCart = ({ cart, addToCart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
