import { Link } from "react-router-dom";
import StarRate from "./star-rate";




export default function ProductItem({item}){

  return <div className="flex flex-col bg-white/75 shadow-xl gap-5 rounded-2xl border-2 border-purple-800 w-80 p-5 overflow-hidden relative">
    <span className="absolute right-8 font-bold text-2xl text-red-500">
      {
        Math.floor(item?.discountPercentage)> 0 ? 
        <span>-%{Math.floor(item?.discountPercentage)}</span>
        : <span></span>
      }
    </span>
    <div className=" flex justify-center overflow-hidden items-center rounded-xl   ">
      <img className=" block  w-full" src={item?.thumbnail} alt="Thumbnail" />
    </div>

    <div className="flex flex-col gap-2 justify-center">

      <h3 className="font-bold text-xl text-yellow-500">
        Rating: <span>{item?.rating} <StarRate /></span>
      </h3>

      <h3 className="font-bold text-xl text-green-700 ">
        Price: {
          Math.floor(item?.discountPercentage)> 0 ? 
          <span className="inline-flex gap-2 items-center">
            <span className="line-through ">${item?.price} </span>
            <span className="">${(item?.price * (100 - item?.discountPercentage)/100).toFixed(2)}</span>
          </span>
          :<span>${item?.price}</span>
        }
      </h3>
      <Link
        to={`product-item/${item?.id}`}
        className="w-[150px] p-2 font-bold border-2 rounded-xl bg-blue-400 hover:bg-blue-300 text-white hover:text-black transition-colors duration-500 ease-in-out shadow-xl"
      >
        Product Details
      </Link>
    </div>
  </div>
}