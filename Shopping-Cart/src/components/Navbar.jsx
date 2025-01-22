import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [dark , setDark ] = useState(false)
    const {openCart , setOpenCart , cart} = useCart();
    console.log("navbar cart",cart)
   
  return (
   <nav>
    <div className='md:max-w-[60vw] max-w-screen m-auto  p-5'>
   
        <ul className='flex justify-between text-lg  font-semibold'>
            <li className='block md:hidden'>Menu</li>
            <li>Shop Page</li>
            <li onClick={()=> setOpenCart(!openCart)} className=' flex flex-row'>Cart<sup className="bg-black rounded-full flex justify-center items-center text-white p-1 h-5 w-5 text-sm">{cart.length}</sup></li>
            <li onClick={() => setDark(!dark) }>
                {dark ? <button>Dark</button> : <button>Light</button>}
            </li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar