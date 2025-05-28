import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext();
export const AppContextProvider = ({ children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const [searchQuery,setSearchQuery] = useState({});
    const [products,setProducts] = useState([]);
    const currency = import.meta.env.VITE_CURRENCY;

    //fetch all products
    
    const fetchproducts = async ()=> {
        setProducts(dummyProducts);
    }
    
    useEffect(()=>{
        fetchproducts();
    },[])
    //Add product to cart
    
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId])
            cartData[itemId]+=1;
        else cartData[itemId]=1;
        setCartItems(cartData);
        toast.success("Added to Cart");
    }

    //Get cart item count
    const getCartCount = () => {
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // Get cart Total item
    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id===items);

            if(cartItems[items] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount*100) / 100;
    }
    // Update product to cart
    const updateCartItem = (itemId,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    }
    // Remove product from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId])
        {
            cartData[itemId] -= 1;
            if(cartData[itemId]===0)
                delete cartData[itemId];
        }
        toast.success("Remove From Cart");
        setCartItems(cartData);
    }
    
    const value = {user,setUser,isSeller,setIsSeller,navigate,showUserLogin, setShowUserLogin ,products ,currency ,cartItems, addToCart, updateCartItem, removeFromCart,searchQuery,setSearchQuery , getCartAmount , getCartCount};
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}