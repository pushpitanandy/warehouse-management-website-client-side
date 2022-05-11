import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Table } from 'react-bootstrap';

const UserItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://whispering-castle-68362.herokuapp.com/userItems?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://whispering-castle-68362.herokuapp.com/perfume/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        <div className='container-fluid mt-5'>
            <h2 className='p-3'>Your Items: {items.length}</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id}>
                            <td>{item.name}</td>
                            <td><img width='20%' src={item.image} alt='' /></td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button onClick={() => handleDelete(item._id)}>X</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default UserItems;