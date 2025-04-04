import React, { useState } from "react";

const Home = () => {
  const [count,setcount]=useState(0)

  const increment =()=>{
    setcount (count+1)
  }
  return (
    <div
      className="contanier mt-3"
      style={{ backgroundColor: "gray", width: "100%", height: "100%" }}
    >
      <div className="row">
        <div className="col">
          <h1 className="d-flex justify-content-center text-white">
            buy the cars in site
          </h1>
          <h1>BOOKING YOUR DREAME CARS NOW </h1>
        </div>
      </div>
      <div className="row" id="im">
        <div className="col">
          <img src="https://tse4.mm.bing.net/th?id=OIP.0vbFQHdIUfIesGqIKAwIJAHaEK&pid=Api&P=0&h=180" />
          <p>lanborgin :{count}</p>
          <button onClick={increment}>buy it now</button>
        </div>
        <div className="col">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.cLe5yHNE0lKnUgMUf_aP5gHaEo&pid=Api&P=0&h=180"
            alt=""
          />
          <p>BMW;{count}</p>
          <button onClick={increment}>buy it now</button>
          
        </div>
        <div className="col">
          <img src="https://wallpaperaccess.com/full/13647.jpg" />
          <p>lanborgin:{count}</p>
          <button onClick={increment}>buy it now</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Greand opaning in tamil nadu</h1>
          <h2>visted our shoreroom </h2>
        </div>
      </div>
      <div className="row" id="map">
        <img className="d-flex justify-content-center" src='https://tse4.mm.bing.net/th?id=OIP.hwqxFLxaUZj4Slia6VSpzgHaJO&pid=Api&P=0&h=180'/>

      </div>
    </div>
  );
};
export default Home;
