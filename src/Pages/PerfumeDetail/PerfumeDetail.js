import React from 'react';
import { useParams } from 'react-router-dom';

const PerfumeDetail = () => {
    const { perfumeId } = useParams();
    return (
        <div className='container-fluid mt-5'>
            <h2 className='pt-4'>Details:{perfumeId}</h2>
        </div>
    );
};

export default PerfumeDetail;