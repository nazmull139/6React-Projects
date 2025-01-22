import { createContext, useContext, useEffect, useReducer, useState } from "react";



const cartContext = createContext();

const cartReducer = (state, action) => { 

    switch (action.type) {

        case "ADD_TO_CART":
            const existingItem = state.find(item => item.id === action.payload.id);
           
            if (existingItem) {
              return item
            }
             console.log("cart existing Item",existingItem)
             console.log("cart action",action.payload)
             console.log("add cart state",state)
            return [...state, { ...action.payload, quantity: 1 }];

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload)

        case "UPDATE_QUANTITY":
            console.log("cart update",state)
             return state.map(item =>
                  item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
                );    
                
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
   // const [totalPrice, setTotalPrice] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    const [ openCart , setOpenCart] = useState(false);
   
    useEffect(() => {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setGrandTotal(total.toFixed(2));
    }, [cart]);

    return ( 
        <cartContext.Provider value={{cart, grandTotal , openCart,setOpenCart, dispatch}}>
        {children}
        </cartContext.Provider>
    )}

export default CartProvider;


export const useCart = () => {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}