<div className="row">
<div className="custom-container col-md-2 col-sm-6 mt-4">
    <img src={eachItem.image} alt="{eachItem.name}"
        className="cart-image" />
</div>
<div className="col-lg-5 col-sm-6 d-flex flex-column">
    <Link to={{pathname:`/NewProductDetail/${eachItem.title}/${eachItem.id}`}}  className="text-decoration-none text-reset"><p className="mt-4 mb-0 fw-medium fs-5 ms-1">{eachItem.title}</p></Link>
    <p className="text-secondary mb-1 fw-semibold ms-1">{eachItem.category}</p>
    <img src="https://eatanytime.in/cdn/shop/products/517mArZh68L._SL1200_3e95d07c-6bff-40fd-8681-b2dea0e8d4ef-713083.jpg?v=1704714161&width=713"
        alt="" style={{ width: "30px", height: "30px" }} />
</div>
<div className="col-md-2 col-sm-6 d-flex align-items-center justify-content-center">
    <button className="border-0 bg-light button-click" onClick={() =>  quantChangePlus(eachItem)}><i
        className="fa-solid fa-plus border rounded-circle p-2 bg-secondary-subtle" ></i></button>
    <p className="mb-0 fs-3 mx-3" >{eachItem.count}</p>
    <button className="border-0 bg-light button-click" onClick={() => quantChangeMinus(eachItem)}><i
        className="fa-solid fa-minus border rounded-circle p-2 bg-secondary-subtle"></i></button>
</div>
<div className="col-lg-2 col-md-3 col-sm-6 d-flex flex-column align-items-lg-end align-items-md-center justify-content-center">
    <div className='d-flex'>
        <p className="fs-5 mb-0 fw-medium" >₹</p>
        <p className="fs-5 mb-0 fw-medium" >{(eachItem.count * eachItem.price).toFixed(2)}</p>
    </div>

    <a href="#" >Save for later</a>
    <a href="#" className="remove delete" onClick={() => removeFromCart(eachItem.id)}>Remove</a>
</div>
</div>