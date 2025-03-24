import React, { useState } from "react";

const Animation = () => {
const [users,setusers]=useState({
  name:"",
  age:""
})

const handlechange=(e)=>{
  const {name,value}=e.target
  setusers((oo)=>({
    ...oo,
    [name]:value
  }))
}


return(
  <div>
    <h1 className="d-flex justify-content-center bg-dark text-warning">
      User profile 
    </h1>
    <form>
      <div className="d-flex justify-content-center" >
          <label>
            name: <input type="text" placeholder="Name" name="name" value={users.name} onChange={handlechange} id="inp" />
          </label>

      </div>
      <label className="d-flex justify-content-center">
        age:  <input type="number" placeholder="enter your age" name="age" value={users.age} onChange={handlechange} />
      </label>
    </form>

    <div className="pt-5">
        <h2>previwe:</h2>

        <p>NAME:{users.name}</p>
        <p>AGE:{users.age}</p>
    </div>
     </div>
)
}


export default Animation