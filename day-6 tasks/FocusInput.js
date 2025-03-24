import React, { useRef } from "react";

const FocusInput = () => {
  const inputref = useRef(null);

  const handleFocus = () => {
    inputref.current.Focus();
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center bg-dark text-warning">	
      useCallback Memoized Callback</h1>
      <div className="d-flex justify-content-center mt-4">
        <input ref={inputref} type="text" placeholder="text hear...." />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button onClick={handleFocus}>focus input</button>
      </div>
    </div>
  );
};
export default FocusInput;
