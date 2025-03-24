import React, { useReducer } from "react";
const reduce = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reduce, { count: 1 });
  return (
    <div>
      <h1 className="d-flex justify-content-center bg-dark text-warning">USE REDUCER</h1>
      <div>
        <h1 className="d-flex justify-content-center" >count:{state.count}</h1>
        <div className="d-flex justify-content-center gap-4 ">
          <button onClick={() => dispatch({ type: "INCREMENT" })} className="bg-success">
            ➕ Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })} className="bg-danger">
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
