import React from 'react'

function Todo({ todo }) {
    return (
        <tr>
            <th scope="row">{todo.id}</th>
            <td >{todo.name}</td>
            <td>{todo.description}</td>
            <td>
                <div className='col-6'><i className="bi bi-pencil-fill" style={{ fontSize: '1rem', color: 'green', cursor: 'pointer' }}></i></div>
            </td>
            <td>
                <div className='col-6'><i className="bi bi-trash-fill" style={{ fontSize: '1rem', color: 'red', cursor: 'pointer' }}></i></div>
            </td>
        </tr>
    )
}

export default Todo
