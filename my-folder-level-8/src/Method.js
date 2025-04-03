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
if(loading)return <img src="https://la-solargroup.com/wp-content/uploads/2019/02/loading-icon.gif" alt="" id="uni" className="d-flex justify-content-center" />
if(error) return <p>Error:{error.message}</p>

  return (
    <div>
        <div className="d-flex justify-content-center">
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