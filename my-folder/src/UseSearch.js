import React, { useEffect, useState } from "react";
import UseDebounce from "./UseDebounce";
const UseSearch = () => {
  const [search,setsearch]=useState("")
  const Debounce =UseDebounce(search,500)

  useEffect(()=>{
    if(Debounce){
        console.log("fetching reasut",Debounce)
    }
  },[Debounce])

  return(
    <div>
        <h1 className="d-flex justify-content-start bg-dark text-warning">useDebounce</h1>
        <div className="d-flex justify-content-center  ">
            <input 
            type="text"
            placeholder="search...."
            value={search}
            onChange={(e)=>setsearch(e.target.value)} />
            <p className="m-3">Debounced search term :{Debounce}</p>
        </div>
    </div>
  )
}
export default UseSearch