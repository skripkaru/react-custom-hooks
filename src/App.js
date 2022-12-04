import React from "react";
import useRequest from "./hooks/useRequest";
import axios from "axios";

function App() {
  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div>
      {todos && todos.map(todo =>
        <div key={todo.id} style={{padding: 30, border: '1px solid #000'}}>
          {todo.id}. {todo.title}
        </div>
      )}
    </div>
  );
}

export default App;
