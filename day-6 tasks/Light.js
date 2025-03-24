import React, { useEffect, useState } from "react";

const Light =()=>{
  
    const [count,setcount]=useState(1)

    const [add,setadd]=useState (2)

    useEffect(()=>{
       const too =setInterval(()=>{
       setadd((varf)=>varf*2)
       },1000)

       return()=>clearInterval(too)

    },)

    useEffect(()=>{
        const interval =setInterval(()=>{
            setcount((vvcount)=>vvcount+1)
        },1000)

        return()=>
            clearInterval(interval)
    },[])
  
    return(
        <div>
            <h1  className="d-flex justify-content-center bg-dark text-warning" >
               	
useEffect Cleanup 
            </h1>
            <div className="d-flex justify-content-center">
            <h1>
                time start:{count}
            </h1>
           
            </div>

            <div className="">
            <h2 className="d-flex justify-content-center">
                add the number {add}
            </h2>
            </div>
        </div>
    )
}
export default Light