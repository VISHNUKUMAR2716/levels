import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";


const Doc = () => {
  const [count,setcount]=useState(0)
useDocumentTitle(`count ${count}`)
  return(
      <div>
        <h1 className="d-flex justify-content-start bg-dark text-warning ">useDocumentTitle</h1>
          <div className="d-flex justify-content-center">
            <h1 className="d-flex justify-content-center">count:{count}</h1>
            <button onClick={()=>setcount(count+1)}  className=" d-flex justify-content-center bg-muted ml-3" id="woo">increment</button>
          </div>
      </div>
  )
}

export default Doc 