import userContext from "../utils/userContext";
import { useContext } from "react";
import userContext from "../utils/userContext";
import Cookies from "js-cookie";

const DashBoard = (props)=>{
    const uname = Cookies.get("currentUser")
    console.log(uname.split('j:')[1].split("f_userName"))
    return(
        <>
            <div style={{display:"flex"}}>
                <img src="https://i0.wp.com/www.dealsdray.com/wp-content/uploads/2023/11/logo_B2R.png?w=469&ssl=1" style={{width:"100px",height:"80px"}}></img>
                <div style={{margin:"auto",marginRight:"0px"}}>
                    <ul style={{listStyleType: "none",display:"flex"}}>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >Home</li></a>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >Employee List</li></a>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >{uname}</li></a>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >Logout</li></a>
                    </ul>
                </div>
            </div>
                <h1>
                    DashBoard
                </h1>
           
                <div style={{textAlign:"center"}}>
                    Welcome Admin Panel
                </div>
        </>
    )
}

export default DashBoard;