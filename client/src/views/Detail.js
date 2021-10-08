import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useNavigate } from '@reach/router';

const Detail = (props) => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    })

    const deleteProduct = (productId) => {
        const { removeFromDom } = props;
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            }, navigate("/products"))
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <hr />
            <button onClick={(e) => { deleteProduct(product._id) }} >delete</button>

        </div >
    )
}
export default Detail;