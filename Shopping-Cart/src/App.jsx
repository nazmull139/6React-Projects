import Navbar from "./components/Navbar"
import CartProvider from "./context/CartContext"
import AllProducts from "./products/AllProducts"


function App() {
 

  return (
<CartProvider>
    <Navbar/>
    <AllProducts/>
</CartProvider>
  )
}

export default App
