
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todoList = [
    new Todo("Learn React"),
    new Todo("Learn Typescript")
  ]
  return (
    <Todos items={todoList}/>
  )
}

export default App;
