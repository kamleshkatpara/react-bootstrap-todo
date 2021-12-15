import React from 'react'
import Todo from '../components/Todo'

function TodoList({ todos, editTodo, deleteTodo }) {
    return (
        <main>
            <div className="row justify-content-center">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col" className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.length > 0 && todos.map((todo, key) =>
                            <Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
                        )}
                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default TodoList
