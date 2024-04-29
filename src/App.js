import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewProducts from "./newProducts/NewProducts";
import NewCart from "./newProducts/NewCart";
import NewProductDetail from "./newProducts/NewProductDetail";
import { productsContext } from "./services/productsContext";
import useProductManage from "./newProducts/useProductManage";

function App() {

  const { cart, setCart, addToCart, removeFromCart, quantChangeMinus, quantChangePlus,data,checkoutprice,setCheckOutPrice } = useProductManage()
  const contextValue = {
    data,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    quantChangeMinus,
    quantChangePlus,
    checkoutprice,
    setCheckOutPrice
  };

  return (

    <productsContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewProducts />} />
          <Route path="/NewCart" element={<NewCart />} />
          <Route path="/NewProductDetail/:productName/:id" element={<NewProductDetail />} />
        </Routes>
      </BrowserRouter>
    </productsContext.Provider>

  )
}

export default App;
