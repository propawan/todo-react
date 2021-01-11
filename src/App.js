import { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';

function App() {
  const [todos, setTodos] = useState([]);

  const handleToDos = (text) => {
    setTodos([{ text, complete: false, key: todos.length }, ...todos]);
  }

  const toggle = (key) => {
    todos.map((elem, i) => {
      if (key === i) {
        elem.complete = !elem.complete
      }
    })
  }

  return (
    <div className="App">
      <TaskInput addInToDo={handleToDos}></TaskInput>
      <div>
        {
          todos.map(({ text, key }, i) => <div className="task" key={key} onClick={() => toggle(i)}>{text}</div>)
        }
      </div>
    </div>
  );
}

export default App;
