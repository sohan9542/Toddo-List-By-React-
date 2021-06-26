import React from 'react'
import { TodoItem } from "./TodoItem";
export const Todos = (props) => {

  let todoStyle = {
    minHeight:"58vh",
  }
    return (
        <div className="container" style={todoStyle}>
          <h3 className="text-center my-3">Todos List</h3>
          {props.todon.length === 0 ? "No Todos to display" : 
          props.todon.map((todo)=>{
            return <TodoItem todo = {todo} key = {todo.sno} onDelete={props.onDelete} />
          })}
        </div>
    )
}
