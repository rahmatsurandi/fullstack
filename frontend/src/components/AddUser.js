import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const AddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                gender
            });
            navigate(`/`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Form onSubmit={saveUser}>
                <Form.Group className="mb-4 w-25" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-4 w-25" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-4 w-25" controlId="exampleForm.ControlTextarea1">

                    <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </Form.Group>

                <Button as={Link} to={'/'} type="submit" className="btn btn-primary">save</Button>

            </Form>
        </div>
    )
}

export default AddUser