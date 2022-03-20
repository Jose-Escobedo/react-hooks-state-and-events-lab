import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState(items);
  const [filterAll, setFilterAll] = useState(true);

  function handleSelectedCategory(e) {
    if (e.target.value === "All") {
      setFilterAll((filterAll) => !filterAll);
    } else {
      setFilterAll(true);
    }

    const newItemsArray = items.filter(
      (item) => item.category === e.target.value
    );

    setCategory(() => newItemsArray);
    console.log(e.target.value);
  }

  // newItemsArray.map((item, index) => (
  //   <Item key={item.id} name={item.name} category={item.category} />
  // ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectedCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterAll
          ? selectedCategory.map((item, index) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : items.map((item, index) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
