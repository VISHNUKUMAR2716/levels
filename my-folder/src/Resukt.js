import React from "react";
import Event from "./Fill";

function toggleOUT(){
 const [isvisable,Toggleevent]=Event(false)

 return(
    <div>
        <h1 className="bg-dark text-warning d-flex justify-content-start">	
useToggle
        </h1>
        <div className="d-flex justify-content-center">
            <button onClick={Toggleevent} className="bg-danger">{isvisable?"hide":"show"}</button>

        </div>
        <div className="d-flex justify-content-center mt-4">
            {isvisable&& <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, culpa.</p>}

        </div>
    </div>
 )
}
export default toggleOUT