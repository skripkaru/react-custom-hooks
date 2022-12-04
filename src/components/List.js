import React, {useEffect, useRef, useState} from 'react';
import useScroll from "../hooks/useScroll";

const List = () => {
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)
  const limit = 20
  const parentRef = useRef()
  const childRef = useRef()
  const intesected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

  function fetchTodos(page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodos(prev => [...prev, ...json])
        setPage(prev => prev + 1)
      })
  }

  return (
    <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
      {todos.map(todo =>
        <div key={todo.id} style={{padding: 30, border: '1px solid #000'}}>
          {todo.id}. {todo.title}
        </div>
      )}
      <div ref={childRef} style={{height: 20, backgroundColor: 'green'}}/>
    </div>
  );
};

export default List;