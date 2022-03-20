import React from "react";
import { useState } from "react";
function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  const [cartText, setCartText] = useState(false);

  const cartTextToggle = cartText ? "Remove From Cart" : "Add to Cart";

  const cartClass = cart ? "in-cart" : "";

  function handleCartClick() {
    setCart((cart) => !cart);
    setCartText((cartTextToggle) => !cartTextToggle);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">
        {cartTextToggle}
      </button>
    </li>
  );
}

export default Item;
