import React,{useState} from "react";

const Count = () => {
    
    const [count, setcount] = useState(0);
  return (
    <div>
      <div className="">
     <h1></h1>
      </div>
      <h1 className=" d-flex justify-content-center algin item-center mt-5 bg-dark text-warning">
        Simple Counter
      </h1>
      <div
        id="oo"
        className="d-flex justify-content-center gap-3 mt-4"
      >
        <button className="btn btn-success" onClick={() => setcount(count + 1)}>📈 Increment</button>
        <button className="btn btn-danger" onClick={() => setcount(count - 1)}>📉 Decrement</button>
      </div>
      <div className="mt-4 text-center" id="ee">
        <h1 >Result:{count}</h1>
      </div>
    </div>
  );
};
export default Count;
