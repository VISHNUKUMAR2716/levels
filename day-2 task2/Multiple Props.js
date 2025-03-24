import React from "react";

const Multiple = ({
  name = "vishnu",
  age = "21",
  city = "salem",
  address = "11/3 nggo colony ponnamma pet salem",
  pincode = "636003",
}) => {
  return (
    <div>
        <h1 className="d-flex justify-content-center align-item-center mt-4 mb-3 bg-dark text-warning" >Multiple Props</h1>
    <div id="pp">
      <ul className="list-group">
        <li className="list-group-item">NAME:     {name}</li>
        <li className="list-group-item">AGE:      {age}</li>
        <li className="list-group-item">CITY:     {city}</li>
        <li className="list-group-item">ADDRESS:  {address}</li>
        <li className="list-group-item">PINCODE:  {pincode}</li>
      </ul>
    </div>
    </div>
  );
};
export default Multiple
