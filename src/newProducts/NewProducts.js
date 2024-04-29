import './products.css';
import { productsContext } from '../services/productsContext';
import NewEachProduct from './NewEachProduct';
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewProducts() {

    const { data, cart, addToCart } = useContext(productsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setUpdatedData(data);
        setLoading(false);

    }, [data]);

    const [updatedData, setUpdatedData] = useState([]);
    const [activeButton, setActiveButton] = useState('All');

    const handleFilter = (category) => {
        setActiveButton(category);
        if (category === 'All') {
            setUpdatedData(data)
        } else {
            let filteredData = data.filter(cat => cat.category === category);
            setUpdatedData(filteredData)
        }

    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container d-flex flex-column my-5 bg-light rounded-4 pb-4 shadow-lg custom-container">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-4 mt-3 fw-medium">Products</p>
                    <Link to={'/NewCart'} className="position-relative">
                        <i className="fa-solid fa-cart-shopping fs-3 text-warning me-5 border rounded-circle bg-danger p-2 "></i>
                        <span className="position-absolute bottom-50 start-50 translate-middle badge rounded-pill bg-secondary mt-5">
                            {cart.length}

                        </span>
                    </Link>
                </div>

                <div className="row ">
                    <div className="col-md-12 d-flex flex-wrap justify-content-center gap-3">
                        <button className={`btn btn-outline-dark ${activeButton === 'All' && 'active'}`} onClick={() => handleFilter("All")}>All</button>
                        <button className={`btn btn-outline-dark ${activeButton === "women's clothing" && 'active'}`} onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
                        <button className={`btn btn-outline-dark ${activeButton === "men's clothing" && 'active'}`} onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
                        <button className={`btn btn-outline-dark ${activeButton === 'jewelery' && 'active'}`} onClick={() => handleFilter('jewelery')}>Jewellery</button>
                        <button className={`btn btn-outline-dark ${activeButton === 'electronics' && 'active'}`} onClick={() => handleFilter('electronics')}>Electronic</button>
                    </div>
                </div>

                <div className="row d-flex ms-3" >
                    {updatedData.map((product, index) => (
                        <NewEachProduct product={product} addToCart={addToCart} isCart={cart.some(item => item.id === product.id)} key={index} />
                    ))}

                </div>
            </div>

        </>
    )
}
export default NewProducts;