import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';


const getImages = (num) => {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        arr.push({ url: `/images/portfolio/image${i}.jpg` })
    }
    return arr
}

const images = getImages(40);





function PortfolioContainer() {

    const [client, setClient] = useState(false);

    useEffect(() => {
        setClient(true)
    }, [])


    return (
        <>
            {client && <Portfolio images={images} />}
        </>
    )
}

export default PortfolioContainer;


