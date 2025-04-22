import { useContext } from "react"
import { GlobalContext } from "../context"
import CartItem from "../components/cart-item";



export default function Cart(){

  const {cart} = useContext(GlobalContext);
  
  

  return <div className="p-10">
    <div className="border-2 border-blue-400 w-[500px] h-[300px] rounded-2xl flex flex-col justify-center items-center gap-5 mx-auto">
      <p className="font-bold text-2xl">Total Element: {
          cart?.length >0 ?
          cart.length
          :0
        } product </p>
      <p className="font-bold text-2xl">Total Price: ${
          cart?.length > 0 ?
          (cart.reduce((sum, item) => sum + (item?.price * (100 - item?.discountPercentage)/100), 0)).toFixed(2)
          :0
        } </p>
    </div>
    <h1 className="font-bold text-5xl text-center mt-5">My Cart</h1>
    <div className="flex flex-wrap gap-9 mt-10">
      {
        cart?.length > 0 ?
        cart.map((item, index) => <CartItem item={item} key={index} /> )
        : <div className="font-bold text-5xl text-center">Your Cart is empty!</div>
      }
    </div>

  </div>
}