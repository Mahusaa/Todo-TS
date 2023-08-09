import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import TodosForm from './components/TodosForm';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmission = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos((prevTodos) => [...prevTodos, newTodo])
  };
  return (
    <>
      <TodosForm onAddTodo={handleSubmission} />
      <Todos items={todos} />
    </>
  )
}

export default App;
