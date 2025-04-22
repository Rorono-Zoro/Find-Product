import "./index.css"
import Navbar from "./components/navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Details from "./pages/details"
import Favorites from "./pages/favorite"
import Cart from "./pages/cart"

export default function App() {

  return <div className="border-2 border-black w-22 min-h-[150vh] ">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites/product-item/:id" element={<Details />} />
      <Route path="/product-item/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/product-item/:id" element={<Details />} />
    </Routes>
  </div>
}