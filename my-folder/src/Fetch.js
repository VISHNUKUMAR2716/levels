import React, { useEffect, useState } from "react";
import axios from "axios"

const Fetch = (url) => {
const [data,setdata]=useState(null)
const [loading, setloading]=useState(false)
const[error,seterror]=useState(null)

useEffect(()=>{
 setloading(true)
 seterror(null)

 axios.get(url).then((response)=>{
    setdata(response.data)
 })
 .catch((err)=>{
    seterror(err)

 })
 .finally(()=>{
    setloading(false)
 })
},[url])
return{data,loading,error}
}
export default Fetch