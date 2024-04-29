import {useEffect,useState} from 'react'

function useProductManage() {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        getData();
    }, [])


    const [checkoutprice, setCheckOutPrice] = useState(0);

    useEffect(() => {
        const totalPrices = cart.reduce((total, product) => {
            return total + product.price * product.count;
        }, 0);
        setCheckOutPrice(totalPrices.toFixed(2));

    }, [cart])

    const getData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const pdata = await response.json();
            setData(pdata);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    

    const addToCart = (product) => {
    
        product = { ...product, count: 1 };

        let existingCartItem = cart.some(prod => prod.id === product.id);

        if (!existingCartItem) {
            setCart([...cart, product]);
        }
    }

    const removeFromCart = (id) => {

        let newcart = cart.filter(prod => prod.id !== id)
        setCart(newcart)
    }
    const quantChangePlus = (item) => {
        const updatedItem = { ...item, count: item.count + 1 };
        setCheckOutPrice((parseFloat(checkoutprice) + parseFloat(item.price)).toFixed(2));

        setCart(cart.map(cartItem => cartItem.id === item.id ? updatedItem : cartItem));
    }

    const quantChangeMinus = (item) => {
        if (item.count > 1) {
            const updatedItem = { ...item, count: item.count - 1 };
            setCheckOutPrice((parseFloat(checkoutprice) - parseFloat(item.price)).toFixed(2));
            setCart(cart.map(cartItem => cartItem.id === item.id ? updatedItem : cartItem));
        }
    }



    return {
        data,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        checkoutprice, 
        setCheckOutPrice,
        quantChangePlus,
        quantChangeMinus
       
    }
        
    
}

export default useProductManage;
