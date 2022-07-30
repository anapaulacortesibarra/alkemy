import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AuthForm from "../AuthForm";

function AuthModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Log In / Sign Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>LogIn / SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AuthForm />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AuthModal;
