import { useContext, useEffect, useState } from "react";
import {Link } from "react-router-dom";
import NewEachCart from "./NewEachCart";
import useProductManage from "./useProductManage";
import { productsContext } from "../services/productsContext";

function NewCart() {

    const {checkoutprice,cart ,setCart} = useContext(productsContext);

    const removeAllFromCart = () => {
        setCart([]);
    }

    return (
        <div className="container my-5 bg-light rounded-4 pb-4 shadow-lg ps-md-5">

            <nav aria-label="breadcrumb" className="pt-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}>Products</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart </li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between align-items-center">
                <p className="fs-4 mt-3 fw-medium col-2">Shopping Cart</p>
                <a href="#" className="remove col-2 ps-2 cart-hide" onClick={() => removeAllFromCart()} >Remove All</a>
            </div>


            {cart.length > 0 ? (
                <>
                    <div className="">
                        {cart.map((eachItem, cartIndex) => (
                            <NewEachCart eachItem={eachItem} key={cartIndex} />
                        ))}
                    </div>
                    <div className="" id="checkout-btn">
                        <div className="row">
                            <div className="col-2">

                            </div>
                            <div className="col-10 ">
                                <hr />

                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-end">
                                <div className="me-3">
                                    <p className="fs-6 fw-medium mb-0">Sub-Total</p>
                                    <p className="text-secondary fw-medium mb-0 rating-text" id="noitems">{cart.length} items</p>
                                </div>
                                <div className="d-flex">
                                    <p className="fs-1 mb-0 fw-medium">₹</p>
                                    <p className="fs-1 mb-0 me-lg-5 pe-lg-4 fw-medium" id="checkout-price">{checkoutprice}</p>
                                </div>


                            </div>
                            <div className="d-flex align-items-center justify-content-end me-lg-5 pe-lg-4 ">
                                <button className="btn btn-primary px-5 rounded-pill mt-2 checkout fw-medium">CheckOut</button>
                            </div>

                        </div>
                    </div>
                </>

            ) : (<p className="fs-4 my-4 text-center " id="cart-empty">Your Shopping Cart is empty...</p>)}
        </div>
    )
}
export default NewCart;