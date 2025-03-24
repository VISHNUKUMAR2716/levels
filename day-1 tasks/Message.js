import React from "react";

function Message(pops){

  const welcome =<h2 className="well">wellcome:{pops.userName}
  </h2>

  const login =  <h2 className="come">please login the portal</h2>
  return (pops.isLoggedIn ? welcome:login )
} 
export default Message