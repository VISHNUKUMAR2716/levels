import React from "react";
import Fetch from "./Fetch";

function Example(){
 const {data,loading,error}=Fetch('https://jsonplaceholder.typicode.com/todos/1')
if(loading) return<h1 className="d-flex justify-content-center text-danger">LOADING.....</h1>

if(error) return<h1 className="d-flex justify-content-center text-danger">ERROR:{error.message}</h1>

return(
    <div>
        <h1 className="d-flex justify-content-start bg-dark text-warning">USE fetch</h1>

    <div>

        <h1 className="d-flex justify-content-center text-success">{data?.title}</h1>
    </div>
    </div>
)


}
export default Example

