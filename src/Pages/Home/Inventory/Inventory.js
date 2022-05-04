import React from 'react';
import { useState, useEffect } from 'react';

const Inventory = () => {

    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/perfume')
            .then(res => res.json())
            .then(data => setPerfumes(data));
    }, []);

    return (
        <div>
            <h2>Available Perfumes: {perfumes.length}</h2>
        </div>
    );
};

export default Inventory;
