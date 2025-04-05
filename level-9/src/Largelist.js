import React from "react";

const LargeList = ({ items }) => {
  console.log("Rendering LargeList 🚀");

  return (
    <div style={{ height: "400px", overflow: "auto", border: "1px solid gray" }}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

// 🔍 Deep comparison using JSON.stringify
function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items);
}

// 🧠 Wrap the component with React.memo + custom comparison
export default React.memo(LargeList, areEqual);
