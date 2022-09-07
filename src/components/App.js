import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [cat, setCat] = useState("All")
  const [freshTask, setFreshTask] = useState({
    text: "",
    category: ""
  })

  function takeOutTheTrash(trashText) {
    setTasks(tasks.filter((task) => task.text !== trashText))
  }

  function onFreshTaskSubmit() {
    setTasks([
      ...tasks,
      freshTask
    ])
  }

  function handleCatChange(e) {
    setCat(e.target.value)
  }

  const filteredTasks = tasks
  .filter((eachTask) => {
    if (cat === "All") return true;
    return eachTask.category === cat;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
        <CategoryFilter 
          CATEGORIES={CATEGORIES} 
          onSetCat={handleCatChange} 
          cat={cat}/>
        <NewTaskForm 
          CATEGORIES={CATEGORIES} 
          onFreshTaskSubmit={onFreshTaskSubmit} 
          freshTask={freshTask}
          setFreshTask={setFreshTask} 
        />
      <TaskList 
        onTakeOutTheTrash={takeOutTheTrash}
        TASKS={filteredTasks} />
    </div>
  );
}

export default App;
