import { Link, useParams,useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { productsContext } from "../services/productsContext";

function NewProductDetail() {

    const { cart, addToCart, removeFromCart } = useContext(productsContext)


    const { id } = useParams();

    const navigate = useNavigate();

    const [isCart, setIsCart] = useState(false);

    const [product, setProduct] = useState({});

    useEffect(() => {

        gettingData();
        setIsCart(cart.some(prod => prod.id === id));

    }, [cart, id]);

    const gettingData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const pdata = await response.json();
            setProduct(pdata);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };


    const handleAddToCart = () => {

        addToCart(product);
        setIsCart(true);
    };

    const handleGoToCart = () => {
        navigate('/NewCart')

    };

    const handleRemove = (id) => {
        removeFromCart(id);
        setIsCart(false)
    }

    return (
        <>
            <div className="container my-5 bg-light rounded-4 pb-4 shadow-lg ps-5">

                <nav aria-label="breadcrumb" className="pt-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Products</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Product Details </li>
                    </ol>
                </nav>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-4 mt-3 fw-medium col-2">Product Details</p>
                    <Link to={'/NewCart'} className="position-relative">
                        <i className="fa-solid fa-cart-shopping fs-3 text-warning me-5 border rounded-circle bg-danger p-2 "></i>
                        <span className="position-absolute bottom-50 start-50 translate-middle badge rounded-pill bg-secondary mt-5">
                            {cart.length}
                        </span>
                    </Link>
                </div>
                <div className="row mt-4 gap-5">
                    <div className="col-lg-3 col-md-4">
                        <img src={product.image} alt="{product.title}" style={{ width: '250px', height: '360px' }} />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <p className="text-secondary fs-3 mb-1 text-uppercase">{product.category}</p>
                        <p className="fs-2 fw-light mb-0">{product.title}</p>


                        <div className="d-flex justify-content-start align-items-center mt-3">
                            <h2 className="">₹ {product.price}</h2>
                            <div className="d-flex align-items-center bg-success px-1 rounded ms-3">
                                <p className="text-light mb-0 rating-text">{product.rating?.rate}</p>
                                <i className="fa-solid fa-star text-light star m-1"></i>
                            </div>

                        </div>
                        <p className="mt-2">{product.description}</p>
                        {isCart ? (
                            <div className="d-flex">
                                <button className="btn btn-success mt-2 adding" onClick={() => handleGoToCart()}>
                                    Go to Cart
                                </button>
                                <button className="btn btn-warning mt-2 text-light adding fw-semibold ms-3" onClick={() => handleRemove(product.id)}>
                                    Remove From Cart
                                </button>
                            </div>

                        ) : (
                            <button className="btn btn-primary mt-2 adding" onClick={() => handleAddToCart()} >
                                Add to Cart
                            </button>
                        )}
                    </div>


                </div>


            </div>


            {/* new one */}
           

        </>
    )
}
export default NewProductDetail;