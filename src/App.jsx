import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./config.jsx"
import { useState } from 'react'

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTodo(event) {
    event.preventDefault();

    if (editIndex !== null) {
      // If editIndex is not null, update the existing todo
      const updatedTodos = [...todo];
      updatedTodos[editIndex] = text;
      setTodo(updatedTodos);
      setEditIndex(null);
    } else {
      // Otherwise, add a new todo
      setTodo([...todo, text]);
    }

    setText("");
  }

  function deleteTodo(index) {
    const updatedTodos = [...todo];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
  }

  function editTodo(index) {
    // Set editIndex and populate the input field with the selected todo
    setEditIndex(index);
    setText(todo[index]);
  }

  return (
    <>
      <h1>Todo App {text}</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="enter text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">{editIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}


export default App