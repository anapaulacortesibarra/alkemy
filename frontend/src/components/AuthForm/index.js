import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/authContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AuthForm() {
    const { logIn, signUp } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = () => {
        logIn(email, password);
    };

    const handleSignUp = () => {
        signUp(email, password);
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Container>
                <Row className="justify-content-md-center">
                    <Button
                        variant="primary"
                        onClick={handleLogIn}
                        className="m-1"
                    >
                         Log In
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleSignUp}
                        className="m-1"
                    >
                        Sign Up
                    </Button>
                </Row>
            </Container>
        </Form>
    );
}

export default AuthForm;
