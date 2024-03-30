import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import api from "../../api/axiosConfig";

const Login = ({ users }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { username, password });
      console.log(response.data); // Handle successful response
      setIsLoggedIn(response.data != null)
    } catch (error) {
      console.error('Error:', error); // Handle error
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
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
          <Link to="/signup">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Login;