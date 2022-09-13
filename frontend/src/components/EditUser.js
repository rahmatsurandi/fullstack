import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

const EditUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById()
    }, [])

    const getUserById = async () => {
        const response = await axios.get(`https://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);

    }


    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
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
            <Form onSubmit={updateUser}>

                <Form.Group className="mb-4 w-25" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className="mb-4 w-25" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </Form.Group>
                <Form.Group className="mb-4 w-25" controlId="exampleForm.ControlTextarea1">

                    <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </Form.Group>

                <Button as={Link} to={'/'} type="submit" className="btn btn-primary">Edit</Button>

            </Form>
        </div>
    )
}

export default EditUser