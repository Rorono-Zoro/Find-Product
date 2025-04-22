import { useState } from "react"
import StarIcon from '@mui/icons-material/Star';




export default function StarRate({numberOfStar = 5}){
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  function handleClick(id){
    setRating(preValue => id);
  }

  function handleMouseOn(id){
    setHover(preValue => id);
  }

  function handleMouseLeave(){
    setHover(rating);
  }


  return <div>
    {
      [...Array(numberOfStar)].map((_, index) => {
        index +=1;
        return <StarIcon 
          key={index}
          onClick={()=> handleClick(index)}
          onMouseOver={()=> handleMouseOn(index)}
          onMouseLeave={()=> handleMouseLeave()}
          style={{
            fontSize: "40px",
            color: index <= (hover || rating ) ? "gold" : "black",
          }}
        />
      })
    }
  </div>
}