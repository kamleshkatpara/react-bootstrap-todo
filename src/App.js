import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import TodoList from './containers/TodoList';

function App() {

  const baseURL = "http://localhost:3001"

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/todos`).then((todos) => setTodos(todos.data)).catch((error) => console.log(error));
    return () => {

    }
  }, [])

  const addTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }

  return (
    <div className="container">
      <Header />
      <div className='row mt-5 mb-5'>
        <div className='col-2'><AddTodo addTodo={addTodo} /></div>
        <div className='col-10'><SearchBox /></div>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
