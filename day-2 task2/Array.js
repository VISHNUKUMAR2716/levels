import React from "react";

const Itemlist=()=>{
    const item =["apple","orange","mongo","graphs","starbarry","bluebarry"]

    return(
        <div >
            <h1 className="d-flex justify-content-center text-warning bg-dark">List Rendering with map</h1>
            <div className="d-flex justify-content-center text-decoration-none">
                <ul>
                    {item.map((item,koo)=>(
                        <li key={koo}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Itemlist