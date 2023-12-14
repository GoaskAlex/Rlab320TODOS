import React from 'react'
import TodoList from './TodoList'
import Header from './Header'
function Body() {
  return (
    <>
    <div className='todo-app'>
    <Header/>
    <TodoList/>
    </div>
    </>
  )
}

export default Body