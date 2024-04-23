// import { Link } from "react-router-dom";

import { useState } from "react";

const Login = ()=>{

    const[test,settest] = useState("");
    return(
        <div>
            <img src="https://i0.wp.com/www.dealsdray.com/wp-content/uploads/2023/11/logo_B2R.png?w=469&ssl=1"></img>
            <h1>Login Page</h1> 
            <h1>Hello, {test}</h1>

        <div style={{marginTop:"2rem"}}>
            <label for="inputField">User Name</label>
            <input type="text" id="inputField" placeholder=" " style={{width:"70%",height:"1.5rem",display:"inline-block",marginLeft:"2rem"}} onChange={(e)=>{settest(e.target.value)}}/>
        </div>
        
        <div style={{marginTop:"2rem"}}>
            <label for="inputField">Password</label>
            <input type="text" id="inputField" placeholder=" " style={{width:"70%",height:"1.5rem",display:"inline-block",marginLeft:"2.7rem"}}/>
        </div>
            
           <button style={{display:"block",margin:"auto",position:"relative",top:"4rem",border:"1px solid #070EF9",background:"green",width:"70%",padding:"0.5rem",borderRadius:"0.5rem",textDecoration:"none",color:"white",cursor:"pointer",textDecoration:"none",marginLeft:"6.7rem"}}>Login</button>
            </div>
      
    )
}

export default Login;