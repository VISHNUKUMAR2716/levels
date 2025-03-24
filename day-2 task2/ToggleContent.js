import React, { useState } from "react";

const ToggleContent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container text-center mt-5">
      <h1 className="bg-dark text-warning p-3 rounded">Toggle Content</h1>
      <button 
        className="btn btn-primary mt-3" 
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && (
        <div className="mt-4 p-3 border rounded bg-light">
          <p>iam vishnu kumar.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
