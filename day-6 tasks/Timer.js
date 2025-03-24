import React, { useEffect } from"react"

const Timer=()=>{
    useEffect(()=>{
        const interval =setInterval(()=>{
            console.log("message logged every seconds")
        },1000)
        //cleanup function
        return ()=>{
    
            clearInterval(interval)
            console.log("Timer cleared on unmount")
        }
        
    },[])

    return<div>
     Check the console for messages
    </div>

}
export default Timer
