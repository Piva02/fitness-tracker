import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const LoginForm = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Autenticación simulada
        if (email && password) {
            setUser({ email });
            navigate('/dashboard');
        }
    };

    return (
        <Container className="mt-5">
            <h2 style={{ color: "#ffffff"}}>Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{ color: "#ffffff"}}>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button className="mt-3" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
};

export default LoginForm;
