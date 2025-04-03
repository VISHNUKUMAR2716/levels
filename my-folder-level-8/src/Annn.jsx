import React, { useEffect, useState } from "react";
import axios from 'axios'

const Annn = () => {
const [data,setdata]=useState([])
const [loading,setloading]=useState(true)
const [error,seterror]=useState(null)

useEffect(()=>{
    const Too =async()=>{
        try{
            const respones =await axios.get("https://jsonplaceholder.typicode.com/posts")
            setdata(respones.data)
        }
        catch (err){
      seterror(err.message)
        }
        finally {
            setloading(false)
        }
    }
    Too()
},[])
if(loading)return <img src="https://la-solargroup.com/wp-content/uploads/2019/02/loading-icon.gif" alt="" />
if(error) return <p>Error:{error.message}</p>

  return (
    <div>
        <div className="">
           <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
           </ul>
        </div>
    </div>
  )
}
export default Annn