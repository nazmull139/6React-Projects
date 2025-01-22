import React from 'react';
import { useCart } from '../context/CartContext';
import CartProduct from './CartProduct';

const AddToCart = () => {
   const {cart , dispatch,openCart,setOpenCart, grandTotal} = useCart();

   //const grandTotal  = totalPrice.reduce((acc, curr) => acc + curr, 0).toFixed(2);

  return (
    <div>
        <div className={`bg-gray-800 text-white p-4 lg:w-[30vw] w-full h-[100vh] flex flex-col justify-start absolute right-0 -top-20 transform transition-transform duration-300 ${
      openCart ? "translate-x-0" : "translate-x-full"
    }`}>
          <div className='mt-20 mb-10 flex justify-between items-center '>
            <h1 className=" text-2xl font-bold">Shopping Cart</h1>
            <button onClick={()=> setOpenCart(!openCart)} className=" text-3xl rounded-full bg-black h-16 w-16 ">X</button>
          </div>
          
          <div className='w-full'>
            {
                cart && cart.length > 0 ? (
                    cart.map((item , index)=>(

                        <div key={index} className="bg-gray-700 p-2 my-2 rounded-md w-full">
                           
                            <CartProduct product={item}  />
                        </div>

                    ))
                ) : <p className="text-center text-lg flex justify-center items-center h-[90vh]">No items in cart</p>
            }
          </div>
          <div className='bg-gray-700 p-2 my-2 rounded-md w-full'>
            Total  : ${grandTotal}
          </div>
        </div>
    </div>
  )
}

export default AddToCart