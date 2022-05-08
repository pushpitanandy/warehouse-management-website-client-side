import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PerfumeDetail = () => {
    const { perfumeId } = useParams();
    const [perfume, setPerfume] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/perfume/${perfumeId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data));
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container-fluid mt-5'>
            <h2 className='pt-4'>{perfume.name}</h2>
            <div className='d-flex justify-content-center'>
                <div>
                    <img width="200px" src={perfume.image} alt="" />
                </div>
                <div>
                    <h6>{perfume.description}</h6>
                    <h5>Price: <span className='text-primary'>${perfume.price}</span></h5>
                    <p>Available Quantity: {perfume.quantity}</p>
                    <p>Supplier: {perfume.supplierName}</p>
                    <button className='btn btn-success'>Delivered</button>
                </div>
            </div>
            <div className='w-50 mx-auto mt-4'>
                <h2>Restock this Perfume</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Enter Quantity' {...register("quantity")} defaultValue={perfume.qunatity} />
                    <input className='mb-2 btn btn-primary' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PerfumeDetail;