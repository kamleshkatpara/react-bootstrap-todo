import React, { useState } from 'react'
import Modal, { Backdrop, ModalBody, ModalFooter } from './Modal';

function DeleteTodo({ todo, deleteTodo }) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div onClick={() => setModal(!modal)} className='col-6'><i className="bi bi-trash-fill deleteIcon" data-bs-toggle="modal" data-bs-target="#Modal"></i></div>

            <Backdrop show={modal} clicked={() => setModal(!modal)} />
            <Modal isOpen={modal}>

                <ModalBody>
                    <h5 className='text-center'>Delete Todo with id: {todo.id} ?</h5>
                </ModalBody>

                <ModalFooter>
                    <div className='text-center'>
                        <button className="btn btn-success m-2" onClick={() => deleteTodo(todo.id)}>Yes Delete</button>
                        <button className="btn btn-danger m-2" onClick={() => setModal(!modal)}>No</button>
                    </div>
                </ModalFooter>

            </Modal>
        </>
    )
}

export default DeleteTodo;
