import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import TodoList from './containers/TodoList';
import Loading from './components/Loading';

function App() {

  const baseURL = "http://localhost:3001"

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${baseURL}/todos`);
        setTodos(data)
        setLoading(false)
        setError('')
      } catch (error) {
        setLoading(false);
        setError(error)
      }
    })()

    return () => {
      setTodos([]);
      setLoading(false);
      setError('')
    }
  }, [])

  const addTodo = async (newTodo) => {
    try {
      setLoading(true)
      const { data } = await axios.post(`${baseURL}/todos`, newTodo);
      setTodos([...todos, data])
      setLoading(false)
      setError('')
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  const editTodo = async (updateTodo) => {
    const { id, name, description } = updateTodo;
    try {
      const { data } = await axios.put(`${baseURL}/todos/${id}`, { name, description });
      setTodos(todos.map((todo) => todo.id === id ? data : todo))
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${baseURL}/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id))
      setLoading(false)
      setError('')
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  return (
    <div className="container">
      <Header />

      <div className='row mt-5 mb-5'>
        <div className='col-2'><AddTodo addTodo={addTodo} /></div>
        <div className='col-10'><SearchBox /></div>
      </div>

      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todos={todos} />
      {!loading && todos.length === 0 && <p className='text-center'>No Data Found</p>}
      {!loading && error && <p>Something went wrong</p>}
      {loading && <Loading />}
    </div>
  );
}

export default App;
