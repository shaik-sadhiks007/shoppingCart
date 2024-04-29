import { useEffect, useState} from "react";
import { useNavigate,Link } from 'react-router-dom';

function NewEachProduct({product,addToCart,isCart}) {

    const navigate = useNavigate();


    const handleAddToCart = (prod) => {
        addToCart(prod);
    };
    const handleGoToCart = () => {
        navigate('/NewCart')
        
    };
    const handleGoToProductDetail = () => {

        navigate(`NewProductDetail/${product.title}/${product.id}`)
        
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mt-5" >
            <img src={product.image} alt="{product.title}" />
            <div className="title-block mt-4">
               <p className="mb-0 fw-medium title" onClick={()=>handleGoToProductDetail()} style={{cursor:'pointer'}}>{product.title}</p>
            </div>
            <p className="text-secondary mb-1">{product.category}</p>
            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex align-items-center bg-success px-1 rounded">
                    <p className="text-light mb-0 rating-text">{product.rating.rate}</p>
                    <i className="fa-solid fa-star text-light star m-1"></i>
                </div>
                <p className="text-secondary mb-0 ms-2">{product.count}</p>
            </div>
            <div className="d-flex align-items-center mt-2">
                <div className="d-flex">
                    <p className="fs-5 mb-0 fw-medium">₹</p>
                    <p className="fs-5 mb-0 fw-medium">{product.price}</p>
                </div>
            </div>
            {isCart ? (
                <button className="btn btn-success mt-2 adding" onClick={() => handleGoToCart()}>
                    Go to Cart
                </button>
            ) : (
                <button className="btn btn-primary mt-2 adding" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                </button>
            )}
        </div>
        
    )
}
export default NewEachProduct;