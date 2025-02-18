// write button card here
// Button.jsx (Inside components folder)
import React from "react";
import "../components/Button.css"; // External CSS for button styling

const Button = ({ label, onClick }) => {
  return (
    <button className="product__btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
