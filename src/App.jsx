import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "wirelessheadphones.jpg"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: "smartwatches.webp"
    },
    {
      id: 3,
      name: "Laptop",
      price: 999,
      image: "laptop.jpg"
    },
    {
      id: 4,
      name: "power bank ",
      price: 1999,
      image: "power bank.jpg"
    },
    {
      id: 5,
      name: "speaker",
      price: 1999,
      image: "speaker.webp"
    },{
      id: 6,
      name: "mobile phones",
      price: 1999,
      image: "iphone.jpg"
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>CHEAPITEM WEBSITE</h2>
        <div>Cart ({cart.length})</div>
      </nav>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>No items added.</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))
        )}
      </div>
      <footer className="footer">
       <p>
    © 2026 Project | Made by{" "}
    <span className="myname">Pradhuman Bhardwaj</span>
  </p>

  <p>ADM NO: 2025B15410060</p>
  <p>ROLL NO: 2503215400122</p>
  <p>CLASS: CSE-DS-3</p>
</footer>
    </div>
    
  );
  
}

export default App;