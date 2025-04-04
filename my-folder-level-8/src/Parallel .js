import React, { useEffect, useState } from "react";
import axios from "axios";

const Parallel  = () => {
 const [data,setData]=useState(null)
 const [loading,setLoading]=useState(true)
 const [error,seterror]=useState(null)
 useEffect(()=>{
  const fetchData=async()=>{
    setLoading(true)
    seterror(null)

    try{
      const [response1,response2]=await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/posts")
      ])
      setData({posts:response1.data,users:response2.data})
    }
    catch(error){
    seterror("failed to fetch data. please try again")
    }
    finally{
      setLoading(false)
    }
  }
  fetchData()
 },[])
 if(loading)return<p>loading.....</p>
 if(error)return<p>{error}</p>
  return (
    <div> 
      <div>
      <h2>Combined API Data</h2>
      <h3>Users</h3>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h3>Posts</h3>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}
export default Parallel 