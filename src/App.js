import { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';

function App() {
  const [todos, setTodos] = useState([]);

  const handleToDos = (text) => {
    setTodos([{ text, key: todos.length, complete: false }, ...todos]);
  }

  const toggle = (key) => {
    setTodos(todos.map((elem, i) => {
      if (key === i) {
        return { ...elem, complete: !elem.complete }
      }
      else {
        return elem;
      }
    }))
  }

  return (
    <div className="App">
      <TaskInput addInToDo={handleToDos}></TaskInput>
      <div>
        {
          todos.map(({ text, key, complete }, i) => {
            return (<div key={key} onClick={() => toggle(i)} style={{ textDecoration: complete ? "line-through" : "" }}>{text}</div>);
          })
        }
      </div>
    </div>
  );
}

export default App;
