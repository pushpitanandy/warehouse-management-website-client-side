import { useState, useEffect } from 'react';

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/perfume')
            .then(res => res.json())
            .then(data => setPerfumes(data));
    }, []);

    return [perfumes, setPerfumes];
}

export default usePerfumes;