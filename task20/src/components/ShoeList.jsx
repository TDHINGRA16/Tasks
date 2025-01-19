import React from "react";


const shoes= [
    {id:1, name:'Running Shoes', price:100, image:'https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg'},
    {id:2, name:'Casual Sneakers', price:80, image:'https://i.ytimg.com/vi/_RlOjjtKQWU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDWqoNrSSbp_RbJ3Bk9UZk_9EmhBg'},
    {id:3, name:'Formal Shoes', price:120, image:'https://baccabucci.com/cdn/shop/products/MG_7666-min_1e99cd5a-e357-41a4-8048-56df9c9b30cc.jpg?v=1681747325'}

];

const ShoeList = ({ addToCart }) => {
    return (
      <div className="shoe-list">
        <h2>Available Shoes</h2>
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>Price: ${shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShoeList;