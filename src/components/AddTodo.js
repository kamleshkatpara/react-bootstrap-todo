import React, { useState } from 'react'
import Modal, { Backdrop, ModalBody, ModalHeader } from './Modal';
import { useFormik } from 'formik';

export default function AddTodo({ addTodo }) {

    const [modal, setModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
        },
        onSubmit: (values, { resetForm }) => {
            addTodo(values);
            resetForm();
            setModal(false);
        },
    });

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={() => setModal(!modal)} data-bs-toggle="modal" data-bs-target="#Modal">Add Todo</button>

            <Backdrop show={modal} clicked={() => setModal(!modal)} />

            <Modal isOpen={modal}>

                <ModalHeader>
                    <h3 className='text-center'>Add New Todo</h3>
                    <button className="btn-close" onClick={() => setModal(!modal)}></button>
                </ModalHeader>

                <ModalBody>
                    <form onSubmit={formik.handleSubmit}>
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