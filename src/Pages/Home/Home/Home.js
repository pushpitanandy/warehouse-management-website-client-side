import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import usePerfumes from '../../../hooks/usePerfumes';
import Perfume from '../Perfume/Perfume';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [perfumes, setPerfumes] = usePerfumes();
    return (
        <div>
            <Banner></Banner>
            <div className='container-fluid m-5'>
                <h2 className='text-center mb-4'>Available Perfumes</h2>
                <Row xs={1} md={3} className="g-4">

                    {
                        perfumes.map(perfume => <Perfume
                            key={perfume._id}
                            perfume={perfume}
                        ></Perfume>).slice(0, 6)
                    }

                </Row>
            </div>
            <button onClick={() => navigate('/inventory')} className='btn btn-success d-grid col-6 mx-auto px-5'>Show All Perfumes</button>
            <About></About>
        </div>
    );
};

export default Home;