import React, { useEffect, useState } from "react";
import axios from "axios";

const cache ={};

const Catch = () => {
    const [data,setdata]=useState(null)
    const [loading,setloading]=useState(true)
    const [error,seterror]=useState(null)

    const fetchdata=async(forceRefersh=false)=>{
        setloading(true)
        seterror(null)
        try {
            if(!forceRefersh&&cache[URL]){
                setdata(cache[URL])
                setloading(false)
                return
            }
            const response=await axios.get(URL)
            cache[URL]=response.data
        } catch(err){
            seterror(err.message)
        } finally{
            setloading(false)
        }
    }

    useEffect(()=>{
        fetchdata()
    },[URL])
    return { data, loading, error, refresh: () => fetchdata(true) };
}
export default Catch