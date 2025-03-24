import React, { useState } from "react";

const Text =()=>{
    const [text,settext]=useState("")

    return (
        <div>
            <h1 className="text-center text-warning bg-dark ">
            Input Field State 
            </h1>
            <div className="d-flex justify-content-center">
                <input type="text" placeholder="type somethking..." value={text} onChange={(e)=>settext(e.target.value)}/>
            </div>

                <p className="d-block justify-content-center text-primary">type 
                   text :{text}
                </p>
        </div>
    )
}
export default Text