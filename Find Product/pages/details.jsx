import { useContext, useEffect } from "react"
import  { GlobalContext } from "../context"
import { useParams } from "react-router-dom"




export default function Details(){
  const {productDetailsData, setProductDetailsData, handleAddToFavorites, favoritesData, cart, handleAddToCart} = useContext(GlobalContext)
  const {id} = useParams();
  

  useEffect(()=> {
    async function getProductDetails(){
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      
      if(data){
        setProductDetailsData(data);
      }
  
    }

    getProductDetails()
  }, []);

  return <div>
    <div className="flex flex-wrap justify-center gap-10">
      {
        productDetailsData && productDetailsData?.images?.map((item, index) => <img 
        className="w-[300px] h-[300px] hover:w-[500px] hover:h-[500px] " 
        key={index} src={item} />)
      }
    </div>
    <h1 className="font-black text-6xl text-red-400 mt-9 text-center">Product Info</h1>
    <div className="flex flex-col gap-2 p-9 text-red-800">
      <span className="font-bold text-lg text-red-800">Is available: <span className="text-black">{productDetailsData.availabilityStatus}</span></span>
      <p className="font-bold text-lg text-red-800" >Description: <span className="text-black">{productDetailsData.description}</span></p>
      <span className="font-bold text-lg text-red-800">Price: <span className="text-green-500">${((productDetailsData.price)*((100- Math.floor(productDetailsData.discountPercentage))/100)).toFixed(2)}</span></span>
      <p className="font-bold text-lg text-red-800">Stock Number: <span className="text-black">{productDetailsData.stock}</span></p>
      <p className="font-bold text-lg text-red-800">Brand: <span className="text-black">{productDetailsData.brand}</span></p>
      <p className="font-bold text-lg text-red-800">Category: <span className="text-black">{productDetailsData.category}</span></p>
    </div>
    <div className="flex justify-center gap-10">
      <button className="font-bold text-3xl text-yellow-500 bg-black p-4 rounded-[50px]"
      onClick={()=> handleAddToFavorites(productDetailsData)}>
        {
          favoritesData?.findIndex(item => item.id === productDetailsData.id) !== -1 ?
          "Remove from Favorites"
          : "Add to Favorite"
        }
      </button>
      
      <button className="font-bold text-3xl text-white bg-green-800 p-4 rounded-[50px]"
      onClick={()=> handleAddToCart(productDetailsData)}>
        {
          cart?.findIndex(item => item.id === productDetailsData.id) !== -1 ?
          "Remove Cart"
          : "Add to Cart"

        }
      </button>
      
    </div>
  </div>
}