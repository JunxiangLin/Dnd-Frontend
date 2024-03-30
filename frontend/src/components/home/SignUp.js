import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import api from "../../api/axiosConfig";

const Signup = ({ users }) => {
    const [status, setStatus] = useState(0);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users/create-user', { name, username, email, password });
            console.log(response.data); // Handle successful response
            setStatus(1);
        } catch (error) {
            console.error('Error:', error); // Handle error
            setStatus(-1);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link to="/">
                <Button variant="secondary">Log In</Button>
            </Link>
            {status === 1 ? (
                <p>Welcome! You are signed up!</p>
            ) : status === 0 ? (
                <p>Please Sign up!</p>
            ) : status === -1 ? (
                <p>There was an error signing up. Please try again.</p>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Signup;