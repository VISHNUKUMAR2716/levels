import React from "react";
import useWindowresize from "./Windows";

const Windowsizedisplay = () => {
  const { width, height } = useWindowresize();
  return (
    <div>
      <h1 className="bg-dark text-warning">useWindowResize</h1>
      <div className="d-flex justify-content-center">
        <h1>window size</h1>
        <p>width:{width}</p>
        <p>height:{height}</p>
      </div>
    </div>
  );
};
export default Windowsizedisplay;
