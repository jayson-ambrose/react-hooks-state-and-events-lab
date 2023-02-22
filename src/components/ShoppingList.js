import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCat, setCat] = useState("All")
  console.log(selectedCat)

  const newArray = items.filter((item) => {
    return selectedCat === item.category
  })

  function doThis (e) {
    setCat(e.target.value)
  } 

  function mapItems(array) {
    return array.map((item) => ( <Item key={item.id} name={item.name} category={item.category} /> ))
  }

  console.log(newArray)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={doThis} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCat === "All" ? mapItems(items) : mapItems(newArray)}
      </ul>
    </div>
  );
}

export default ShoppingList;
