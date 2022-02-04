import React from 'react';
import './App.css';
import InputField from "./components/InputField";
import { ToDo } from "./model";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  return (
    <>
    <div className="App">
      <span className="head">To-Do!</span>
      <InputField  />
    </div>
    </>
  );
}

export default App;
