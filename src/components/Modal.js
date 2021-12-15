import React, { useEffect, useState } from 'react'

export const ModalHeader = ({ children }) => <div className="modal-header">{children}</div>;

export const ModalBody = ({ children }) => <div className="modal-body">{children}</div>;

export const ModalFooter = ({ children }) => <div className="modal-footer">{children}</div>;

export const Backdrop = ({ show, clicked }) => (show ? <div className="Backdrop" onClick={clicked}></div> : null)

export default function Modal({ isOpen, children }) {
    const [modalShow, setModalShow] = useState('');
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        if (isOpen) {
            setModalShow('show');
            setDisplay('block');
        } else {
            setModalShow('');
            setDisplay('none');
        }
        return () => {

        }
    }, [isOpen])

    return (
        <div
            className={'modal fade ' + modalShow}
            style={{ display: display }}
            id="Modal"
            data-bs-backdrop="static" data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">{children}</div>
            </div>
        </div>
    )
}
