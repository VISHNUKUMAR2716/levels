import React, { useState } from "react";

const Home = () => {
const [select,setselect]=useState("full house","land")

const handlechange =(event)=>{
setselect(event.target.value)
}
  return (
    <div>
      <div className="row" id="too">
        <div className="col">
          <h1>QUICK RENT</h1>
        </div>
        <div className="col">
          <ul className="list-inline d-flex gap-5 pt-3 justify-content-end">
            <li className="list-inline-item">
              <a href="#" className=" text-decoration-none text-dark">
                PayRent
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className=" text-decoration-none text-dark">
                Post Your Property AD
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className=" text-decoration-none text-dark">
                Sign In
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className=" text-decoration-none text-dark">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container"></div>
      <div className="row">
        <div className="col" id="q">
          <h1>World's Largest NoBrokerage Property Site</h1>
        </div>
      </div>
      <div className="row">
        <div className="col" id="roo">
          <h5>
            <a href="#">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.qIia__j9t8LEvRzyzOP8bwHaHa&pid=Api&P=0&h=180"
                alt=""
              />
              |Home Interions|45-days Guarantee
            </a>
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col" id="ee">
          <ul>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Buy
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Rent
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Commercial
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col" id="city">
            <select name="#">
              <option value="coimbatore">coimbatore</option>
              <option value="salem">salem</option>
              <option value="mumbai">mumbai</option>
              <option value="bangalore">bangalore</option>
              <option value="pune">pune</option>
              <option value="chenni">chenni</option>
              <option value="gurgaon">gurgaon</option>
              <option value="hydarabad">hydarabad</option>
              <option value="delhi">delhi</option>
              <option value="noida">noida</option>
            </select>
            <input type="text" placeholder="address for perforence" />
            <button type="submit">Search</button>
          </div>
        </div>
      </div> 
      <div className="row">
        <div className="col">
          <label>
         <input type="radio"
         value="full house"
         checked={select==="full house"}
          onchange={handlechange}
        />
        <span>full house</span>
        </label>

        <label>
         <input type="radio"
         value="land polt"
         checked={select==="land"}
          onchange={handlechange}
        />
        <span>land</span>
        </label>
  
        </div>
        </div> 
        </div>
  );
};
export default Home;
