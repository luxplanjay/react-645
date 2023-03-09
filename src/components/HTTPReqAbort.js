import axios from 'axios';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(prevState => !prevState)}>
        {isVisible ? 'Unmount' : 'Mount'}
      </button>
      {isVisible && <ChildComponent />}
    </div>
  );
};

const ChildComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
        setTodos(prevTodos => [...prevTodos, ...response.data]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>ChildComponent</h2>
      {todos.length > 0 && (
        <div>
          {todos.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
