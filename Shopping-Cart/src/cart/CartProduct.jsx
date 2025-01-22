import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

    const {dispatch } = useCart();
  // Calculate total price
  const alltotalPrice = (quantity * product.price).toFixed(2);



  // Remove from cart
  const removeFromCart = (id) => {

        dispatch({type:'REMOVE_FROM_CART' , payload:id})
  } 

  // Handlers for increment and decrement
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: product.id, quantity: newQuantity },
    });
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity: newQuantity },
      });
    }
  };

  return (
    <div className="h-[15vh] bg-gray-100 flex justify-between items-center p-4 rounded-lg shadow-md">
      {/* Product Image and Title */}
      <div className="flex items-center space-x-4">
        <img src={product.images[0]} alt={product.title} className="h-16 w-16 rounded-md bg-white object-cover" />
        <p className="font-medium text-gray-800">{product.title}</p>
      </div>

      {/* Price and Quantity Controls */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-700">${product.price}</p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={increment}
            className="flex items-center justify-center text-xl rounded-full h-8 w-8 bg-green-500 text-white hover:bg-green-600"
          >
            +
          </button>
          <p className="text-lg font-medium text-gray-800">{quantity}</p>
          <button
            onClick={decrement}
            className="flex items-center justify-center text-xl rounded-full h-8 w-8 bg-red-500 text-white hover:bg-red-600"
          >
            -
          </button>
        </div>
      </div>

      {/* Total Price and Remove Button */}
      <div className="flex flex-col items-end">
        <p className="text-lg font-semibold text-gray-800">Total: ${alltotalPrice}</p>
        <button
        onClick={()=>removeFromCart(product.id)}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
        >
          Remove
        </button>
      
      </div>
   
    </div>
  );
};

export default CartProduct;
