import React from "react";

function Fetchdatapromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockdata = { name: "John", age: 30, status: "success" };
      resolve(mockdata);
    }, 2000);
  });
}
function Fetchdata() {
  Fetchdatapromise()
    .then((data) => {
      console.log("data received", data);
    })
    .catch((err) => {
      console.error("error:", err);
    });
}

Fetchdata();
export default Fetchdatapromise
