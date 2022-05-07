import React from 'react';
import { Helmet } from 'react-helmet-async';
import officePic from '../../../images/office.jpg';

const About = () => {
    return (
        <div className='m-4 p-5 d-flex'>
            <div>
                <Helmet>
                    <title>About - Perfumes United</title>
                </Helmet>
                <h1>About Us</h1>
                <p className='mt-2 text-primary fw-bold p-5'>Perfumes United distributes fragrances around the world for a variety of fashion brands, celebrities and lifestyles. The corporate headquarters of United Perfumes is located in Florida in USA. The company's mission is to distribute fragrances of recognized brands that attract a loyal and different clients. Our main customers are Perfume Wholesalers, Perfume Stores and Duty Free Shops.</p>
            </div>
            <div>
                <img src={officePic} alt="" />
            </div>
        </div>
    );
};

export default About;