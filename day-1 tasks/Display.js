import React from "react";

const Display = () => {
  return React.createElement(
    "h2",
    { id: "in" },
    "hello:",
    React.createElement("h2", { id: "out" }, "Vishnu kumar A")
  );
};

export default Display;
