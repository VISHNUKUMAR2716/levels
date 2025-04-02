import React, { useEffect, useState } from "react";

function UseGeolocation(){
    const [location,setlocation]=useState(null)
    const [error,seterror]=useState(null)

    useEffect(()=>{
        if(!navigator.geolocation){
            seterror("Geolocation is not supported by your browser.")
            return
        }
        const hendleing =(posision)=>{
         setlocation({
            latitude:posision.coords.latitude,
            longitude:posision.coords.longitude
         })
        }
        const errorhandle=(err)=>{
            seterror(err.message)
        }
        const watcher =navigator.geolocation.watchPosition(hendleing,errorhandle)

return ()=>navigator.geolocation.clearWatch(watcher)
    },[])
    return {location,error}
}
export default UseGeolocation