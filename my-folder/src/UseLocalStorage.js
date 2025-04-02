import React, { useEffect, useState } from "react";

const UseLocalStorage = (key, intvalue) => {
  const [value, setvalue] = useState(() => {
    const storevalue = localStorage.getItem(key);
    return storevalue ? JSON.parse(storevalue) : intvalue;
  });
  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value));
  }, [key, value]);

  return [value,setvalue]
};
export default UseLocalStorage;
