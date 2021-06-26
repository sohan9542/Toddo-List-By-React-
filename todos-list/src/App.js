import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/Footer";
import { AddTodo } from "./mycomponents/AddTodo";
import { About} from "./mycomponents/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todos',JSON.stringify(todos));

  }

  const [todos, setTodos] = useState([initTodo]);

  const addTodo = (title, desc) =>{
    let sno;
    if (todos.length == 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc:desc
    }
    setTodos([...todos, myTodo])

    localStorage.setItem('todos',JSON.stringify(todos));

  }

  return (
    <>
    <Router>
      <Header title="My Todo List" searchBar={false} />

      <Switch>
        <Route exact path="/" render={()=>{
          return (<>
          <AddTodo addTodo={addTodo} />
          <Todos todon={todos} onDelete={onDelete} /> 
          </>)
          }}>
      </Route>

          <Route exact path="/about">
            <About />
          </Route>
       
        </Switch>

      

      <Footer />
    </Router>
    </>
  );
}

export default App;
