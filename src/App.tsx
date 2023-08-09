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
  const handleRemoveTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  };
  return (
    <>
      <TodosForm onAddTodo={handleSubmission} />
      <Todos items={todos} onRemoveTodo={handleRemoveTodo}/>
    </>
  )
}

export default App;
