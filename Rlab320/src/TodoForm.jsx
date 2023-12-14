import React from "react";
import { useState, useReducer } from "react";

function TodoForm(props) {
  const [data, setData] = useState("");

  //Reducer plug EditTodo
  const [todos, dispatch] = useReducer(props.edit ? props.edit.value : "");

  const handleChange = (event) => {
    setData(event.target.value);
    //Reducer_Part
//     dispatch({
//       type: "EDIT",
//       payload: { name: event.target.name,id},
//     });
   };

  const handleSub = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: data,
    });
    setData("");
  };

  return (
    <>



      <form className="todo-form" onSubmit={handleSub}>
        {props.edit ? (
        <>
        <input
            className="todo-input"
          type="text"
          placeholder="UpDate"
          value={data}
          name="text"
          onChange={handleChange}
        />

        <button className="todo-btn">Update</button>
        </>):(<>
        <input
        className="todo-input"
        type="text"
        placeholder="Add Something"
        value={data}
        name="text"
        onChange={handleChange}
      />

      <button className="todo-btn">Add</button></>)}
     
      </form>
    </>
  );
}

export default TodoForm;
