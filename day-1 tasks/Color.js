import React, { useState } from "react";

function Color (){
    const [Color , setColor] =useState('blue')

    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
           <h2 style={{textAlign:"center"}}>Dynamic background color</h2>
           <div style={{
            width:"200px",
            height:"100px",
            backgroundColor: Color,
            margin: "20px auto",
            lineHeight: "100px",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
           }}>
             {Color}
           </div>
           <select onChange={(e) => setColor(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value='orange'>orange</option>
      </select>
        </div>
    )
}

export default Color