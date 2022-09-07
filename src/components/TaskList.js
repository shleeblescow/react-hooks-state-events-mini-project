import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";


function TaskList({ TASKS, onTakeOutTheTrash }) {

   return (
    <div className="tasks">
      {TASKS.map((eachTask) => (
        <Task 
          key={uuid()}
          category={eachTask.category} 
          text={eachTask.text}
          onTakeOutTheTrash={onTakeOutTheTrash}
        />
      ))}
    </div>
  );
}

export default TaskList;