import { useContext } from "react"
import { GlobalContext } from "../context"
import ProductItem from "../components/product-item";



export default function Favorites(){

  const {favoritesData} = useContext(GlobalContext);
  console.log(favoritesData);
  return (
    <div className="flex gap-5 mt-4 ml-4">
      {
        favoritesData && favoritesData.length > 0 ?
        favoritesData.map((item, index) => <ProductItem item={item} key={index} /> )
        : <h1 className="font-bold text-4xl">Favorites list empty !</h1>
      }
    </div>
  )
}