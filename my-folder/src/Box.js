import React, { useRef, useState } from "react";

const Input = ({ intvalue = "" }) => {
  const [value, setValue] = useState(intvalue);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <h1 className="d-flex justify-content-start bg-dark text-warning">useInput</h1>
        <div className="d-flex justify-content-center mt-5"> 

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="type....."
        />
        </div>
        <p className="d-flex justify-content-center mt-3">{value}</p>

    </div>

  );
};

export default Input;
