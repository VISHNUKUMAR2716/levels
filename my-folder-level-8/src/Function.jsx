import React from "react";

function MyComponets(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Mokedata={id:2,name:"vishnu",status:"success"}
            resolve(Mokedata)
        },2000)
    })

}
async function Update(){
    try{
        const data =await MyComponets()
        console.log("data recevied",data)
    }
    catch (error){
        console.log("error:",error)
    }
}
Update()
export default MyComponets