import React, { useState } from "react";
import ToDoList from "./ToDoItem";

function App() {
  const [task, setTask] = useState("inicial");
  const [taskList, setTaskList] = useState([]);

  function upTask(event) {
    const newValue = event.target.value;
    setTask(newValue);
  }

  function addTask() {
    console.log(task);
    setTaskList((prevItems) => {
      return [...prevItems, task];
    });
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={task} onChange={upTask} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {taskList.map((taskList) => (
            <ToDoList key={taskList.toString()} text={taskList} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
