import React from 'react';
import { Table } from 'react-bootstrap';
import usePerfumes from '../../hooks/usePerfumes';

const ManageInventory = () => {

    const [perfumes, setPerfumes] = usePerfumes();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/perfume/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = perfumes.filter(perfume => perfume._id !== id);
                    setPerfumes(remaining);
                })
        }
    }

    return (
        <div className='container-fluid mt-5'>
            <h2>Manage the Perfume Inventory</h2>
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
                        perfumes.map(perfume => <tr key={perfume._id}>
                            <td>{perfume.name}</td>
                            <td><img width='20%' src={perfume.image} alt='' /></td>
                            <td>{perfume.price}</td>
                            <td>{perfume.quantity}</td>
                            <td><button onClick={() => handleDelete(perfume._id)}>X</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;