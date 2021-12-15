import { useFormik } from 'formik';
import React, { useState } from 'react'
import Modal, { Backdrop, ModalBody, ModalHeader } from './Modal';


function EditTodo({ todo, editTodo }) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    }

    const formik = useFormik({
        initialValues: {
            id: todo.id,
            name: todo.name,
            description: todo.description,
        },
        onSubmit: (values, { resetForm }) => {
            editTodo(values);
            resetForm();
            setModal(false);
        },
    });

    return (
        <>
            <div onClick={() => setModal(!modal)} className='col-6'><i className="bi bi-pencil-fill editIcon" data-bs-toggle="modal" data-bs-target="#Modal"></i></div>

            <Backdrop show={modal} clicked={() => setModal(!modal)} />
            <Modal isOpen={modal}>
                <ModalHeader>
                    <h3 className='text-center'>Edit Todo</h3>
                    <button
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => toggle()}
                    >
                    </button>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="hidden" id='id' name='id' value={formik.values.id} />
                        <div className="mb-3">
                            <input type="text" id="name" name="name" className="form-control" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} required />
                        </div>
                        <div className="mb-3">
                            <textarea id="decription" name="description" className="form-control" placeholder="Description" rows="3" onChange={formik.handleChange} value={formik.values.description} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </ModalBody>

            </Modal>
        </>
    )
}

export default EditTodo
