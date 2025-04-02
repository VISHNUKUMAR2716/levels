import React, { useState } from "react";
import useIntersectionObserver from "./IntersectionObserver";

function InfiniteScrollComponent() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

  const loadMoreItems = () => {
    setItems((prevItems) => [...prevItems, ...Array.from({ length: 10 }, (_, i) => prevItems.length + i + 1)]);
  };

  const targetRef = useIntersectionObserver(loadMoreItems, { threshold: 1.0 });

  return (
    <div>
      {items.map((item) => (
        <div key={item} style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
          Item {item}
        </div>
      ))}
      <div ref={targetRef} style={{ height: "20px", background: "transparent" }}></div>
    </div>
  );
}

export default InfiniteScrollComponent;