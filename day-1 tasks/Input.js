import React, { useState } from "react";

function Input(){
    const [num1,setnum1] =useState(0)
    const [num2,setnum2] =useState(0)
 return (
    <div className="container text-center mt-5" id="zero">
      <div className="d-flex justify-content-start align-item ">
         <h1> CALCULTE THE VALUES</h1>
      </div>
      <h3>COLLEGE FEES</h3>

      <input type="number" placeholder="enter the your brith date"
      value={num1}
      onChange={(e)=>setnum1(Number(e.target.value))}
      className="form-contro; m-2" id="one"
      />

<input type="number" placeholder="enter the your event date"
      value={num2}
      onChange={(e)=>setnum2(Number(e.target.value))}
      className="form-contro; m-2" id="two"
      />
     <h3 id="three">pirce amout:{num1+num2}</h3>
     
    </div>
 )
}
export default Input