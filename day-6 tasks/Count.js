import React, { useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);
  const [isvisble, setisvisble] = useState(false);
  const [text, settext] =useState("")
  const [animation,setanimation] =useState(false)
  return (
    <div>
      <h1 className="d-flex justify-content-center align-item-center bg-dark text-danger">
        {" "}
        Day-6 Counts
      </h1>
      <div className="contanier">
        <div className="row">
          <div className="col bg-dark text-warning  pt-2" id="hed-1">
            <h3 className="d-flex justify-content-center  ">
              useState Counter
            </h3>
          </div>
        </div>
        <div className="row">
          <h1
            className="d-flex justify-content-center pt-4"
            style={{
              fontFamily: "fantasy",
            }}
          >
            count value:{count}
          </h1>
        </div>

        <div className="col d-flex justify-content-center gap-3 pt-3">
          <button onClick={() => setcount(count + 1)} className="bg-success">
            Increment
          </button>
          <button onClick={() => setcount(count - 1)} className="bg-danger">
            Decrement
          </button>
          <button onClick={() => setcount(count * 2)} className="bg-warning">
            Multiple
          </button>
          <button onClick={() => setcount("0")} className="bg-dark text-white">
            reset
          </button>
        </div>
      </div>

      <h3 className="d-flex justify-content-center mt-3 bg-dark text-warning">useState Toggle</h3>

      <div className="container">
        <div className="row animation ?">
          <div className="col d-flex justify-content-center pt-4">
            <button onClick={() => setisvisble(!isvisble)}>
              {isvisble ? "hide content" : "show content"}
            </button>
          </div>
            <div className="peg-1">

            {isvisble &&(
                <p >hello iam vishnu kumar i study sns college of engineering</p>
            )}
            </div>
        </div>
      </div>
        <h3 className="d-flex justify-content-center bg-dark text-warning">	
        useState Input</h3>
      <div className="contanier"> 
          <div className="row" id="input">
            <div className="col d-flex justify-content-center">
               <input name="text" placeholder="type sone thinking...."
               className={animation?"animation":""}
               onChange={(e)=>settext(e.target.value)}
               onClick={()=>setanimation(true)}/>

            </div>
            <div className="row" id="text" >
                 <h1 className="d-flex justify-content-center mt-4">{text}</h1>
            </div>

          </div>
      </div>
    </div>
  );
};
export default Count;
