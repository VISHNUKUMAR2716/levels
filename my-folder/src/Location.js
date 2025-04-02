import React from "react";
import UseGeolocation from "./LocationDefalt";

const Location = () => {
 const {location ,error}=UseGeolocation()

 return(
    <div>
        <h1 className="d-flex justify-content-center bg-dark text-warning">useGeolocation</h1>
        <div className="d-felx justify-content-center">
            {error?(
                <p>Error:{error}</p>

            ):location?(
                <p> latitude:{location.latitude},longitude:{location.longitude}</p>
            ):(
                <p>Fatching location ...</p>
            )}
        </div>
    </div>
 )
}
export default Location