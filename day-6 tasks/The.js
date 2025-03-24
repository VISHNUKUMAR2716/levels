import React, { useState } from "react";

const Dark = () => {
  const [light, setlight] = useState(false);

  const toggle = () => {
    setlight(!light);
  };

  return (
    <div>
<h1 className="d-flex justify-content-center bg-dark text-warning">light and dark screen</h1>

    
    <div
      style={{
        backgroundColor: light ? "white" : "black",
        color: light ? "black" : "wheat",
        padding: "10px",
        margin: "10px",
        display :'flex',
        justifyContent:"center",
        alignItems:"center"

      }}
    >
        <button 
         onClick={toggle}
        style={{
        padding:"20px 10px",
        fontSize:"20px",
        cursor :"pointer",
        color: light? "black" :"withe",
        border: "2px solid"
        }}>
        {light? "switch to dark":"switch to light"}
        </button>
    </div>
    </div>
  );
};
export default Dark;
