import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Perfume = ({ perfume }) => {
    const { name, description, image, price, quantity, supplierName } = perfume;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <p>Price: <span className='text-primary fw-bold'>${price}</span></p>
                    <p>Suppier: {supplierName}</p>
                    <p>Available quantity: {quantity}</p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Perfume;