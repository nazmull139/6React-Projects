import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product  }) => {

  const { cart ,dispatch} = useCart();
  //console.log(cart)

  const addToCart = (product)=>{

    dispatch({type:'ADD_TO_CART' , payload:product})
  }


  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="bg-yellow-100 m-auto w-[90%] h-[40vh] md:h-[60vh] lg:h-[50vh] p-4 md:m-[0] rounded-3xl shadow-lg gap-4">
      <div className="h-full flex flex-col justify-between items-center">
        {/* Product Image */}
        <div className="rounded-3xl bg-white p-4 h-[400px] lg:h-[400px] lg:p-8 w-full flex items-center justify-center">
          <div className="bg-gray-200 h-full w-full flex justify-center items-center ">
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-32 w-32 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4 w-full">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">{product.title}</h3>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4 w-full">
          <p className="text-lg font-semibold text-gray-900">${product.price}</p>
          <button onClick={()=>addToCart(product)}  disabled={isInCart} className="bg-blue-500 ml-2 text-white p-2 rounded-md hover:bg-blue-600 transition">
          {isInCart ? "Already in Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
