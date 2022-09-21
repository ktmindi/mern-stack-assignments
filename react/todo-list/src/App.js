import React, {useState} from "react"
import './App.css'

import TodoList from "./components/TodoList"
function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length == 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };


  const handleDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) =>{
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }
  

  const handleCheck = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx == i) {
        const updatedTodo = {... todo, complete: !todo.complete};
        return updatedTodo;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }


  return (
    <div className="App">
      <p class="placeholder-wave">
        <span class="placeholder col-12"></span>
      </p>
      <form className="form col-4 mx-auto" onSubmit={(event) =>{
        handleNewSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }}
        type="text"
        value={newTodo}
        />
        <div>
          <button>add</button>
        </div>
      </form>
      <p class="placeholder-wave">
        <span class="placeholder col-12"></span>
      </p>

      {todos.map((todo, i) => {
        return (
        <TodoList key={i} i={i} todo={todo} handleCheck={handleCheck} handleDelete={handleDelete}/>);
      })}
    </div>
  );
}

export default App;
