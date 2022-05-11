import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.webp';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.webp';

const Banner = () => {
    return (
        <div className="container-fluid">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide" height="500px"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to the world of Perfumes</h3>
                        <p>We distribute original perfumes throughout the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide" height="500px"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to the world of Perfumes</h3>
                        <p>We distribute original perfumes throughout the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide" height="500px"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to the world of Perfumes</h3>
                        <p>We distribute original perfumes throughout the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;