import React from "react";

function Task({ category, text, onTakeOutTheTrash }) {

  function handleTrashClick() {
    onTakeOutTheTrash(text)
  }
  

  return (
    <div className="task"> 
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete"
        onClick={handleTrashClick}>
        X
      </button>
    </div>
  );
}

export default Task;

