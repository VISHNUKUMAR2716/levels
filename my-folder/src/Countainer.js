import React, { useState } from'react'
const Countaine = (intvalue) => {

    const [count,setcount]=useState(intvalue)
   const Increment =()=> setcount((perv)=>perv+1)
   const Decrement =()=>setcount((perv)=>perv-1)
   const Reset =()=>setcount(intvalue)

   return{ count,Increment,Decrement,Reset}

}


export default Countaine