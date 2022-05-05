import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Perfume from '../Perfume/Perfume';

const Inventory = () => {

    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/perfume')
            .then(res => res.json())
            .then(data => setPerfumes(data));
    }, []);

    return (
        <div className='container-fluid m-5'>
            <h2 className='text-center mb-4'>Available Perfumes</h2>
            <Row xs={1} md={3} className="g-4">

                {
                    perfumes.map(perfume => <Perfume
                        key={perfume._id}
                        perfume={perfume}
                    ></Perfume>)
                }

            </Row>
        </div>
    );
};

export default Inventory;
