import React from 'react';
import { Row } from 'react-bootstrap';
import usePerfumes from '../../../hooks/usePerfumes';
import Perfume from '../Perfume/Perfume';

const Inventory = () => {

    // const [perfumes, setPerfumes] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/perfume')
    //         .then(res => res.json())
    //         .then(data => setPerfumes(data));
    // }, []);

    const [perfumes, setPerfumes] = usePerfumes();

    return (
        <div className='container-fluid m-5 p-3'>
            <h2 className='text-center mt-5 mb-2 pt-2'>Available Perfumes</h2>
            <Row xs={1} md={3} className="g-4">

                {
                    perfumes.map(perfume => <Perfume
                        key={perfume._id}
                        perfume={perfume}
                    ></Perfume>)
                }

            </Row>
        </div>
    );
};

export default Inventory;
