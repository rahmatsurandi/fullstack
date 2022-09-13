import React, { useState, useEffect } from 'react'
import { Row, Table, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        setUsers(response.data)
    }
    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://localhost:500/users/${id}`)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='py-5'>
            <Link to="/add" className='btn btn-primary'>Add</Link>
            <Row>
                <Col md={4}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <Button as={Link} to={`/edit/${user._id}`} className="btn btn-primary">edit</Button>
                                            <Button onClick={(e) => deleteUser(user._id)} className="btn btn-primary">delete</Button>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default UserList