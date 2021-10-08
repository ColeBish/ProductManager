import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/List';
const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <Form />
            <hr />
            <h2>All Products</h2>
            {loaded && <ProductList product={product} />}
        </div>
    )
}
export default Main;