import React, { useEffect, useState } from 'react'


export const ModalHeader = props => {
    return <div className="modal-header">{props.children}</div>;
};

export const ModalBody = props => {
    return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter = props => {
    return <div className="modal-footer">{props.children}</div>;
};


export const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
)


function Modal(props) {
    const { isOpen, children } = props;
    const [modalShow, setModalShow] = useState('');
    const [display, setDisplay] = useState('none');

    const openModal = () => {
        setModalShow('show');
        setDisplay('block');
    }

    const closeModal = () => {
        setModalShow('');
        setDisplay('none');
    }

    useEffect(() => {
        if (isOpen) {
            openModal()
        } else {
            closeModal()
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
            <div className="modal-dialog">
                <div className="modal-content">{children}</div>
            </div>
        </div>
    )
}


export default Modal
