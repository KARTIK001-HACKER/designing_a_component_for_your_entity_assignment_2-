// write product card here
// Productcard.jsx (Inside cart component folder)
import React from "react";
import Button from "../components/Button";
import "../components/Productcard.css"; // External CSS for styling

const Productcard = () => {
  // Static product details
  const product = {
    image: "assets/Deadpool.png",
    name: "Wireless Headphones",
    price: "$99.99",
  };

  return (
    <div className="productcard">
      <div className="productcard__image-container">
        <img src={product.image} alt={product.name} className="productcard__image" />
      </div>
      <div className="productcard__details">
        <h3 className="productcard__name">{product.name}</h3>
        <p className="productcard__price">💲{product.price}</p>
        <Button label="View Product" onClick={() => alert("Product details coming soon!")} />
      </div>
    </div>
  );
};

export default Productcard;
