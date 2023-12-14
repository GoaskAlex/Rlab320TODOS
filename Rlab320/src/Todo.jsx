import React from "react";
import {ACTIONS} from './Form.jsx'
function Todo({ todo, dispatch }) {
  return (
    <>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:todo.id})}>Select</button>
      <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:todo.id})}>Delete</button>
    </>
  );
}

export default Todo;
