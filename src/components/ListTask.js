import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../Actions";
import Task from "./Task";
import Filter from "./Filter";

const ListTask = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [filtred,setFiltred]=useState([])
  const handleToggleTask = (id) => {
    dispatch(toggleTodo(id)); 
  };

  useEffect(()=>{
    setFiltred(todos)
    console.log(filtred)
},[todos])
  const handleDeleteTask = (id) => {
    dispatch(removeTodo(id));
  };
  const onFilter = (type) => {
    console.log(type)
    if(type==="all"){
        setFiltred(todos)
    }else
    {
        if(type==="done"){
            setFiltred(todos.filter((el)=>el.isDone===true))
        }else{
            setFiltred(todos.filter((el)=>el.isDone===false))
        }
    }
   
  }; 

  return (
    <div>
        <Filter onFilter={onFilter}/>
      <div className="task-list">
        {filtred.map((task) => (
          <Task key={task.id} task={task} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;