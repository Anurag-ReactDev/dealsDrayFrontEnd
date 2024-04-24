// import { Link } from "react-router-dom";

import { useState,useContext } from "react";
import userContext from "../utils/userContext";

const head = new Headers();
head.append('Content-type','application/json');

const authentication = async (tempU,password,setAuthResponse)=>{
    try{
    const authDetails = await fetch("http://localhost:3000/login", {
        method : 'POST',
        credentials:"include",
        headers:head,
        body:JSON.stringify({
            name : tempU,//state variable
            password: password//state variable
        })
    }
    )
    const data = await authDetails.json();
    
    console.log("Awaiting result")
    console.log(data);
    console.log(data?.result[0]?.f_userName)
    const nameofUser = data?.result[0]?.f_userName;
    setAuthResponse(true)
    // setUserName(nameofUser)
}
catch(err){
    console.log(err)
    alert("Not Authorised")
}
}
const Login = ()=>{
    const{userName,setAuthResponse,setUserName} = useContext(userContext)
    const [tempU,settempU] = useState();
    const[password,setPassword] = useState();
   const validateUser = ()=>{

   }
    return(
        <div>
            <img src="https://i0.wp.com/www.dealsdray.com/wp-content/uploads/2023/11/logo_B2R.png?w=469&ssl=1"></img>
            <h1>Login Page</h1> 
        

        <div style={{marginTop:"2rem"}}>
            <label for="inputField">User Name</label>
            <input type="text" id="inputField" placeholder=" " style={{width:"70%",height:"1.5rem",display:"inline-block",marginLeft:"2rem"}} onChange={(e)=>{settempU(e.target.value)}} />
        </div>
        
        <div style={{marginTop:"2rem"}}>
            <label for="inputField">Password</label>
            <input type="text" id="inputField" placeholder=" " style={{width:"70%",height:"1.5rem",display:"inline-block",marginLeft:"2.7rem"}} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
            
           <button style={{display:"block",margin:"auto",position:"relative",top:"4rem",border:"1px solid #070EF9",background:"green",width:"70%",padding:"0.5rem",borderRadius:"0.5rem",textDecoration:"none",color:"white",cursor:"pointer",textDecoration:"none",marginLeft:"6.7rem"}} onClick={()=>{authentication(tempU,password,setAuthResponse,setUserName)}}>Login</button>
            </div>
      
    )
}

export default Login;