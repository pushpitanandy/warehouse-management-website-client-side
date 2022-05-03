import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <p className='text-center bg-dark text-light p-5'><small>Copyright {new Date().getFullYear()} </small></p>
        </footer>
    );
};

export default Footer;