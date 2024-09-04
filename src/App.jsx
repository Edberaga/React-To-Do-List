import { useState } from "react";
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  return (
  <main className="m-3">
    <input 
      type="text" 
      value={newTodo}
      onChange={(event) => setNewTodo(event.target.value)}
    />
    <Button variant="primary" className="ms-3" onClick={addTodo}>
      Add
    </Button>
    <section>
      {todos}
    </section>
  </main>
  )
}

export default App
