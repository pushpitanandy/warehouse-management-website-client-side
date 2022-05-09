import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddPerfume = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/perfume';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('New Item Added');
    }

    return (
        <div className="mt-5 w-50 mx-auto">
            <h2 className='p-3'>Add a New Perfume</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Perfume Name' {...register("name")} />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Name of Supplier' {...register("supplierName")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Image URL' {...register("image")} />
                <input className='mb-2' placeholder='Email' defaultValue={user.email} {...register("email")} />
                <input className='btn btn-success' type="submit" value='Add new Perfume' />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddPerfume;