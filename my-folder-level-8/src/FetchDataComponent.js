import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchDataComponent = () => {
  const [data,setdata]=useState(null)
  const [loading,setloading]=useState(true)

  useEffect(()=>{
    const source =axios.CancelToken.source()

    axios.get("https://jsonplaceholder.typicode.com/users",{
      cancelToken:source.token,
    })
 .then((response)=>{
   setdata(response.data)
   setloading(false)
 })
 .catch((error)=>{
  if(axios.isCancel(error)){
   console.log("requset cencelled",error.message)
  } else{
    console.error("error:",error)
  }
  setloading(false)
 })
 return ()=>{
  source.cancel("component unmounted")
 }
  },[])
  return (
    <div>


    <h2 className="d-flex justify-content-center bg-dark text-white">User Data</h2>
    <div className="d-flex justify-content-center">
    {loading && <p>Loading...</p>}
    {data && (
      <ul className="list-unstyled">
        {data.map((user) => (
          <li key={user.id} className="list-inline-item">{user.name} 📧 {user.email}</li>
        ))}
      </ul>
    )}
  </div>
  </div>
  )
}
export default FetchDataComponent