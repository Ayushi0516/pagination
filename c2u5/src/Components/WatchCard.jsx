import React from "react";
import { Link } from "react-router-dom";
import styles from "./WatchCard.module.css"

const WatchCard = ({watches,id}) => {
  console.log(watches)
  return (
    <>
    <div className={styles.grid}>
    {watches.map((item)=>(
      <div   data-testid={`watch-card-wrapper-${id} key=${item.id} `}>{item.id}
    <Link to={`/watches/${item.id}`}>
      <div>
        <img data-testid="watch-card-image" src={item.image} width="200px" alt="image" />
      </div>
      
      <div>
        <div data-testid="watch-name"> Name: {item.name}</div>
        <div data-testid="watch-category">category: {item.category}</div>
      </div>
      </Link>
    </div>
    ))}
   </div>
    </>
  );
};

export default WatchCard;
