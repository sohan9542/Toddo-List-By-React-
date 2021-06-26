import React from 'react'
import { useState } from 'react';
export const AddTodo = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        addTodo(title, desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description </label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" required/>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
