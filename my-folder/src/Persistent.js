import React from "react";
import UseLocalStorage from "./UseLocalStorage";

const Persistent = () => {
  const [text, settext] = UseLocalStorage("inputvalue", "");

  return (
    <div >
      <h2 className="d-flex justify-content-strat mt-2 bg-dark text-danger">Persistent Input</h2>
      <div className="d-flex justify-content-center mt-5">
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Type something..."
        />
      </div>
      <p className="text-center text-danger mt-4">stored value:{text}</p>
    </div>
  );
};
export default Persistent;
