import axios from 'axios';
import { useRef } from 'react';

export const App = () => {
  const abortController = useRef();

  const fetchData = async () => {
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, { signal: abortController.current.signal });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
    </div>
  );
};
