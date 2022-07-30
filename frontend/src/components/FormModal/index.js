import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TicketForm from "../TicketForm";

function FormModal( {title, variant, ticket} ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={variant} onClick={handleShow}>
                {title}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TicketForm 
                        setShow={setShow}
                        ticket={ticket}
                     />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormModal; 
