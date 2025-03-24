import React, { useState } from 'react';

function Function(props) {
    const [user, setUser] = useState("vishnu kumar A");
    const changename =()=>{
        setUser("kumar vishnu")
        
    }
    const reset =()=>{
        setUser("vishnu kumar A")
    }

    return (
        <div>
                <h1 className='d-flex justify-content-center align-items-center bg-dark text-warning'>
                    Functional Greeting
                </h1>
        <div className='container' >
            <div className='row d-flex justify-content-center align-items-center mt-5'>
                <div className='d-flex justify-content-between align-items-center' id='one'>
                <h2>{user}</h2>
                <button className='btn btn-primary mt-3 ml-2 w-25 ' onClick={changename}>changename</button>
                <button className='btn btn-primary mt-3 ml-2 w-25'  onClick={reset}>reset</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Function;
