import React, { useEffect, useState } from 'react';
import AddToCart from '../cart/AddToCart';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
 // const [cart , setCart] = useState([])
 const {openCart , setOpenCart} = useCart();

  const fetchAllProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();

      if (result?.products && result.products.length > 0) {
        setProducts(result.products);
      }
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className='relative'>
        {
          openCart && <AddToCart  />
        }
       
      </div>
       <div className="m-auto w-[90%] md:w-[80%] py-6">
      <h1 className="text-center text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 md:gap-10 sm:gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product}  />
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default AllProducts;
