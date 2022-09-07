import React from "react";

function CategoryFilter({ CATEGORIES, onSetCat, cat}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((eachCat) => (
        <button
            className={(eachCat === cat) ? "selected" : ""}
            key={eachCat}
            id={eachCat}
            onClick={onSetCat}
            value={eachCat}
            >{eachCat}
          </button>
      ))}
    </div>
  );
}

export default CategoryFilter;