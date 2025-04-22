import { useContext } from "react"
import { GlobalContext } from "../context"
import ProductItem from "../components/product-item";


export default function Home(){
  const {productData, loading} = useContext(GlobalContext);
  
  if(loading) return <div className="text-xl font-bold text-center">Please wait data is loading..!</div>

  return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 ">
    {
      productData && productData.length > 0 ?(
      productData.map((item, index) => <ProductItem key={index} item={item} />))
      : (<div className="text-xl font-bold text-center">Please enter any product..!</div>)
    }
  </div>
}