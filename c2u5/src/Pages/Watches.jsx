import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { getWatch } from "../Redux/AppReducer/action";

const Watches = () => {
  const watches=useSelector((store)=> store.AppReducer.watches)
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams();
  const urlCategory=searchParams.get("category")

  useEffect(()=>{
    if(watches.length===0 && (!urlCategory))
    {
      dispatch(getWatch());
    }
  },[])

  

console.log(watches)
  return (
    <div>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        <WatchCard  watches={watches}/>
      </div>
    </div>
  );
};

export default Watches;
