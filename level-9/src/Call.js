import React, { useMemo, useState } from "react";

const UsermemoExample = () => {
  const [number, setnumber] = useState(0);
  const [count, setcount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("calculating...");
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += number;
    }
    return result;
  }, [number]);
  return (
    <div className="bg-dark text-white mt-5">
      <h2 className="d-flex justify-content-center bg-dark text-warning">usememo example</h2>
      <div>
        <input
        className="d-flex justify-content-center"
          type="number"
          value={number}
          onChange={(e) => setnumber(Number(e.target.value))}
        />
        <p  className="d-flex justify-content-center">calculation value:{expensiveCalculation}</p>
        <button onClick={()=>setcount(count+1)}>re-render</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
};
export default UsermemoExample
