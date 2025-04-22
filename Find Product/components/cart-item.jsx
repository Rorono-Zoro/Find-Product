import { useContext } from "react"
import { GlobalContext } from "../context"
import { Link } from "react-router-dom";





export default function CartItem({item}){

  const {handleAddToCart} = useContext(GlobalContext);


  return (
    <div >
      <div className="border-2 border-black  w-[500px] h-[300px] flex justift-center items-center relative rounded-xl ">
        <div className="absolute top-3 right-3 font-bold bg-red-400 rounded-2xl p-1 text-white cursor-pointer"
        onClick={()=> handleAddToCart(item)}>
          Remove Cart
        </div>
        <div>
          <img src={item?.thumbnail} alt="thumbnail"
          className=" w-44 h-44 "
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-bold text-lg">{item?.title}</h2>
          <p className="font-bold text-lg">${(item?.price * (100 - item?.discountPercentage)/100).toFixed(2)}</p>
          <Link
            to={`product-item/${item?.id}`}
            className="w-[150px] p-2 font-bold border-2 rounded-xl bg-blue-400 hover:bg-blue-300 text-white hover:text-black transition-colors duration-500 ease-in-out shadow-xl"
          >
            Product Details
          </Link>
        </div>
      </div>
    </div>
  )
}