import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PerfumeDetail = () => {
    const { perfumeId } = useParams();
    const navigate = useNavigate();
    const [perfume, setPerfume] = useState({});
    const [isReload, setIsReload] = useState(true);

    useEffect(() => {
        const url = `https://whispering-castle-68362.herokuapp.com/perfume/${perfumeId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data));
    }, [isReload])

    const handleDelivered = (perfume) => {

        const { quantity } = perfume;
        const newQuantity = quantity - 1;
        perfume.quantity = newQuantity;
        setPerfume(perfume);

        const url = `https://whispering-castle-68362.herokuapp.com/perfume/${perfumeId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(perfume)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setIsReload(!isReload);
            })

    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data, perfume.quantity);
        const { quantity } = data;
        const newQuantity = parseInt(perfume.quantity) + parseInt(quantity);
        perfume.quantity = newQuantity;
        setPerfume(perfume);

        const url = `https://whispering-castle-68362.herokuapp.com/perfume/${perfumeId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(perfume)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setIsReload(!isReload);
            })
    }

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
                    <button onClick={() => handleDelivered(perfume)} className='btn btn-success'>Delivered</button>
                </div>
            </div>
            <div className='w-50 mx-auto mt-4'>
                <h2>Restock this Perfume</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Enter Quantity' {...register("quantity")} />
                    <input className='mb-2 btn btn-primary' type="submit" value='Restock' />
                </form>
                <button onClick={() => navigate('/manageInventory')} className='btn btn-success d-grid col-6 mx-auto px-5 mt-3'>Manage Inventories</button>
            </div>
        </div>
    );
}

export default PerfumeDetail;