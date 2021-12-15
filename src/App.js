import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import TodoList from './containers/TodoList';
import Loading from './components/Loading';

export const AlertBox = ({ message }) => <div className="alert alert-success" role="alert">{message}</div>

function App() {

  const baseURL = "http://localhost:3001"

  const [todos, setTodos] = useState([]);

  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')

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
      setError('');
      setMessage('')
      setShowAlert(false);
    }
  }, [])

  const addTodo = async (newTodo) => {
    try {
      setLoading(true)
      const { data } = await axios.post(`${baseURL}/todos`, newTodo);
      setTodos([...todos, data])
      setLoading(false)
      setError('')
      setMessage(`New Todo added successfully with id: ${data.id}`)
      setShowAlert(true);
      setTimeout(() => {
        setMessage('');
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setError(error);
      setMessage('')
      setShowAlert(false);
    }
  }

  const editTodo = async (updateTodo) => {
    const { id, name, description } = updateTodo;
    try {
      const { data } = await axios.put(`${baseURL}/todos/${id}`, { name, description });
      setTodos(todos.map((todo) => todo.id === id ? data : todo));
      setMessage(`Todo with id: ${id} updated successfully`)
      setShowAlert(true);
      setTimeout(() => {
        setMessage('');
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setError(error);
      setMessage('')
      setShowAlert(false);
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${baseURL}/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id))
      setMessage(`Todo with id: ${id} deleted successfully`)
      setShowAlert(true);
      setTimeout(() => {
        setMessage('');
        setShowAlert(false);
      }, 3000);
      setLoading(false)
      setError('')
    } catch (error) {
      setLoading(false);
      setError(error);
      setMessage('')
      setShowAlert(false);
    }
  }

  return (
    <div className="container">
      <Header />

      <div className='row mt-5 mb-3'>
        <div className='col-2'><AddTodo addTodo={addTodo} /></div>
        <div className='col-10'><SearchBox /></div>
      </div>

      {showAlert && <AlertBox message={message} />}

      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todos={todos} />

      {!loading && todos.length === 0 && <p className='text-center'>No Data Found</p>}

      {!loading && error && <div class="alert alert-danger text-center" role="alert">Something went wrong</div>}

      {loading && !error && <Loading />}

    </div>
  );
}

export default App;
