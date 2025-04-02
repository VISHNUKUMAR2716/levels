import React from "react";
import Countainer from "./Countainer";

const Update = () => {
const {count,Increment,Decrement,Reset}=Countainer(0)

return(
    <div>
        <h1 className="d-flex justify-content-center bg-dark text-warning">	
        useCounter</h1>
        <div className="d-flex justify-content-center">
            <h1>count:{count}</h1>

        </div>
        <div className="d-flex justify-content-center gap-3">
            <button onClick={Increment} className="bg-success">Increment</button>
            <button onClick={Decrement} className="bg-danger">Decrement</button>
            <button onClick={Reset} className="bg-warning">Reset</button>
        </div>
    </div>
)
}
export default Update