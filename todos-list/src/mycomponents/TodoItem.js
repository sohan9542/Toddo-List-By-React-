import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="py-2">
            <h4>{todo.title}</h4>
            <p>{todo.desc} </p>
            <button className="btn-danger btn-sm" onClick={ () => onDelete(todo)}>delete</button>
        </div>
    )
}
