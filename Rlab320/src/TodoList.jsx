import React from 'react'
import { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';
function TodoList() {
  const [todos, setTodos] =useState([]);


  const addTodo = todo =>{
    const newTodos =[todo, ...todos]
    setTodos(newTodos)
    console.log(...todos);
  } 

///Reducer
// const updateTodo=(todos, action=>{
//     switch (action.type) {
//         case "EDIT":
//           return {
//             ...todos,
//             [action.payload.name]: action.payload.id,
//         };
//     }})

  const updateTodo=(todoId,newValue)=>{
    setTodos(prev=> prev.map(item=>(item.id === todoId?newValue:item)))
  }

  const removeTodo=id=>{
    const removeArr=[...todos].filter(todo=>todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo =id=>{
    let updatedTodos=todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete=!todos.isComplete
        }
        return toDo
    })
  }
    return (
    <>
    <TodoForm onSubmit={addTodo}/>
    <Todos todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
    
    </>
  )
}

export default TodoList