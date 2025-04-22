import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [productDetailsData, setProductDetailsData] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();
  
  async function handleData(event){
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchParam}`)
      const data = await response.json();
      if(data?.products){
        setProductData(data?.products);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
            
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  function handleAddToFavorites(getCurrentItem){
    let copyFavoritesData = [...favoritesData];
    const index = copyFavoritesData.findIndex(item => item.id === getCurrentItem.id);
    if(index === -1){
      copyFavoritesData.push(getCurrentItem);
    }else {
      copyFavoritesData.splice(index, 1)
    }
    setFavoritesData(copyFavoritesData);
  }

  function handleAddToCart(getCurrentItem){
    let copyFavoritesData = [...cart];
    const index = copyFavoritesData.findIndex(item => item.id === getCurrentItem.id);
    if(index === -1){
      copyFavoritesData.push(getCurrentItem);
    }else {
      copyFavoritesData.splice(index, 1)
    }
    setCart(copyFavoritesData);
  }


  return <GlobalContext.Provider value={
    {
      searchParam,
      setSearchParam,
      loading,
      setLoading,
      handleData,
      productData,
      productDetailsData,
      setProductDetailsData,
      handleAddToFavorites,
      favoritesData,
      setFavoritesData,
      cart,
      handleAddToCart
    }
    }>
    {children}
  </GlobalContext.Provider>;
}
