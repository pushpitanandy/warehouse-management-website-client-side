import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Perfume = ({ perfume }) => {
    const { name, description, image, price, quantity, supplierName, _id } = perfume;

    const navigate = useNavigate();
    const navigateToDetail = id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <div>
            <Card style={{ width: '18rem', height: '600px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <p>Price: <span className='text-primary fw-bold'>${price}</span></p>
                    <p>Suppier: {supplierName}</p>
                    <p>Available quantity: {quantity}</p>
                    <Button onClick={() => navigateToDetail(_id)} variant="primary">Manage</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Perfume;