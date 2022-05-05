import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <About></About>
        </div>
    );
};

export default Home;