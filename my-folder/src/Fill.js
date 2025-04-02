import React, { useState } from "react";

function Event(intvalue = false) {
  const [value, setvalue] = useState(intvalue);

  const toggle = () => {
    setvalue((pevr) => !pevr);
  };
  return [value, toggle];
}
export default Event;
