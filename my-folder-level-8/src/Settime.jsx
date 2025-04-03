import React from "react";

function Fetchdata(callback) {
  console.log("fetch data .... please wait");

  setTimeout(() => {
    const data = [
      { id: 1, name: "John" },

      { id: 2, name: "Jane" },

      { id: 3, name: "Doe" },

      { id: 4, name: "Smith" },

      { id: 5, name: "Alice" },

      { id: 6, name: "bob" },

    ];

  callback(data)
  },2000);
  
}
Fetchdata((error,data)=>{
    if(error){
        console.error("error makes find",error)
        return
    }
    console.log("data received", data)
})
export default Fetchdata