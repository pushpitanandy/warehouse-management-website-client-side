import { useState, useEffect } from 'react';

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('https://whispering-castle-68362.herokuapp.com/perfume')
            .then(res => res.json())
            .then(data => setPerfumes(data));
    }, []);

    return [perfumes, setPerfumes];
}

export default usePerfumes;