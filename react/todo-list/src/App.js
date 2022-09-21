import React, {useState} from "react"
import './App.css'

function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };


  const handleDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) =>{
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }
  
  return (
    <div className="App">
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
      
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <span>{todo}</span>
            <button onClick={(event) => {
              handleDelete(i);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
