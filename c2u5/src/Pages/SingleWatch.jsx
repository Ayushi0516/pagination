import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatch } from "../Redux/AppReducer/action";
import {  useParams } from "react-router-dom"

const SingleWatch = () => {
  const {id}=useParams();
const dispatch=useDispatch()
const watches=useSelector(store=> store.AppReducer.watches)
const [ watch,setWatch]=useState({});

useEffect(()=>{
  if(watches.length===0)
  {
      dispatch(getWatch())
  }
},[dispatch,watches.length])

useEffect(()=>{
if(id)
{
  const current=watches.find(
      (item)=> item.id===id)
      current && setWatch(current)
}
},[id,watches])

console.log(watch)

  return (
    <div>
      <h2>{watch.name}</h2>
      <div>
        <img src={watch.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{watch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
