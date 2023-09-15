import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Actions";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css"
import Filter from "./components/Filter";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTask = (description) => {
    dispatch(addTodo(description));
  };
  return (
    <div className="App">
       <div class="wrapper">
      <AddTask onAdd={handleAddTask} />
      <ListTask />
    </div>
    </div>
  );
};

export default App;