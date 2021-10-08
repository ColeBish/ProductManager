import axios from "axios";
import React, { useState } from "react";



const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description,
        };
        axios.post("http://localhost:8000/api/products", newProduct)
            .then((Response) => console.log(Response))
            .catch((Error) => console.log(Error));

    }
    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Product </p>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    >
                    </input>
                </div>
                <div>
                    <p>Price </p>
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    >
                    </input>
                </div>
                <div>
                    <p>Description </p>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    >
                    </input>
                </div>
                <button type="submit">
                    Create
                </button>
            </form>

        </div>
    );
}

export default Form;