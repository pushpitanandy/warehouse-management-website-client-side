import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PerfumeDetail = () => {
    const { perfumeId } = useParams();
    const [perfume, setPerfume] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/perfume/${perfumeId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data));
    }, [])

    return (
        <div className='container-fluid mt-5'>
            <h2 className='pt-4'>Details:{perfume.name}</h2>
        </div>
    );
};

export default PerfumeDetail;