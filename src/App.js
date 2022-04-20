import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Did mount');
    return () => {
      console.log('Will unmount');
    };
  }, []);
  console.log('Will mount');

  useEffect(() => {
    console.log('Did update count: ', count);
  }, [count]);

  useEffect(() => {
    // hago una llamada al end point
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>Clickeado { count } veces</button>
      </header>
    </div>
  );
}

export default App;
