import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);

  function doThisToo() {
    setCart(!cart)
  }

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={doThisToo} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
