import React from "react";

function List(){
    return (
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <h2>Stitic List in React</h2>
            <ul style={{listStyleType:'none',padding:"10px",color:"white"}}> 
                <li>apple</li>
                <li>orange</li>
                <li>banana</li>
                <li>grapes</li>
            </ul>
        </div>
    )
}
export default List