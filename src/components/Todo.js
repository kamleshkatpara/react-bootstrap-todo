import React from 'react'
import DeleteTodo from './DeleteTodo'
import EditTodo from './EditTodo'

function Todo({ todo, editTodo, deleteTodo }) {
    return (
        <tr>
            <th scope="row">{todo.id}</th>
            <td >{todo.name}</td>
            <td>{todo.description}</td>
            <td>
                <EditTodo todo={todo} editTodo={editTodo} />
            </td>
            <td>
                <DeleteTodo todo={todo} deleteTodo={deleteTodo} />
            </td>
        </tr>
    )
}

export default Todo
