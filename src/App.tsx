import './App.css';
import Todos from './components/Todos';
import TodosForm from './components/TodosForm';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <TodosForm/>
      <Todos/>
    </TodosContextProvider>
  )
}

export default App;
