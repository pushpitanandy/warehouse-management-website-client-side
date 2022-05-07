import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <div className='text-center mt-5'>
            <Helmet>
                <title>Contact Us - Perfumes United</title>
            </Helmet>
            <h2>Contact Us</h2>
            <br />
            <h5>We ship to most countries direct from our facility in South Florida.<br /> <span className='text-primary'>Feel free to visit us.</span></h5>
            <br />
            <p><span className='fw-bold text-primary'>Business Hours:</span> Monday to Friday 10:00 am to 5:00 pm</p>
            <p><span className='fw-bold text-primary'>Address:</span> 12 Avenue, Florida 33172 United States</p>
            <p><span className='fw-bold text-primary'>Telephone:</span> 905-100-3585</p>
            <p><span className='fw-bold text-primary'>Email:</span> sales@perfumesunited.com</p>
        </div>
    );
};

export default ContactUs;