import React, { useState } from "react";

const Form =()=>{
  //state to hold from values 
  const [formdata, srtformdata]=useState({
    name:'',
    email:''
  })
  //handle input change
  const handlechange =(event)=>{
    const {name ,value}=event.target;
    srtformdata({
        ...formdata,
        [name]: value
    })
  }
  const handlesubmit=(event)=>{
    event.preventDafault();
    alert(`name:${formdata.name},email:${formdata.email}`)
  }
  return(
    <div>
<h1 className="d-flex justify-content-center text-warning bg-dark">Form Submission</h1>

    <form onSubmit={handlesubmit} className="d-flex justify-content-center gap-2">
        <div>
            <label>
                Name:
                <input type="text"
                name="name"
                value={formdata.name}
                onChange={handlechange}
                required
                />
            </label>
        </div>
        <div>
            <label>
                Email:
                <input type="email"
                name="email"
                value={formdata.email}
                onChange={handlechange}
                required
                />
            </label>
        </div>
        <button type="submit">submit</button>
    </form>
  </div>
  )
}
export default Form