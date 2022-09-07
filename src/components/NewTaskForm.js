import React from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ CATEGORIES, onFreshTaskSubmit, freshTask, setFreshTask }) {

  function handleTaskSubmit(e) {
    e.preventDefault()
    onFreshTaskSubmit({
      id: uuid(),
      ...freshTask
    })
    setFreshTask({
      text: "",
      category: ""
    })
  }

  function handleFormChange(e) {
    e.preventDefault()
    setFreshTask({
      ...freshTask,
      [e.target.name]: e.target.value
    })
  }


  return (
    <form className="new-task-form" onSubmit={handleTaskSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={freshTask.text} 
          onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select 
          name="category"
          value={freshTask.category}
          onChange={handleFormChange}>
          {CATEGORIES.map((eachCat) => (
            <option
              key={eachCat}
              value={eachCat}>
              {eachCat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
