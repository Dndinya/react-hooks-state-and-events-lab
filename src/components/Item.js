import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleButtonClick = () => {
    setIsInCart(prevIsInCart => !prevIsInCart);
  };
  // Determine the class name based on whether the item is in the cart
  const liClassName = isInCart ? 'in-cart' : '';

  // Determine the button text based on whether the item is in the cart
  const buttonText = isInCart ? 'Remove From Cart' : 'Add to Cart';
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>
        {buttonText}
      {/* {isInCart ? 'Remove From Cart' : 'Add to Cart'} */}
      </button>
    </li>
  );
}

export default Item; 
