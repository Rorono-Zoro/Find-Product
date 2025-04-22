import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Navbar() {

  const {searchParam, setSearchParam, loading, setLoading, handleData} = useContext(GlobalContext);
  

  return (
    <div className="border-2 border-b-red-600 flex justify-center items-center gap-4 h-40 ">
      <form onSubmit={handleData}>
        <input
          className="border-2 border-solid rounded-2xl border-sky-500 w-96 h-8 font-bold p-2 "
          type="text"
          placeholder="Search Any Product...!"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      <h2 className="font-bold text-xl ">
        <Link to={"/"}>Home</Link>
      </h2>
      <h2 className="font-bold text-xl ">
        <Link to={"/favorites"}>Favorites</Link>
      </h2>
      <h2 className="font-bold text-xl ">
        <Link to={"/cart"}>My Cart</Link>
      </h2>
    </div>
  );
}
