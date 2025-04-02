import React, { useEffect, useState } from "react";

function UseDebounce(value, delay) {
  const [Debounce, setDebounce] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return Debounce;
}
export default UseDebounce;
