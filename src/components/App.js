import Login from "./Login";
import DashBoard from "./Dashboard";
import userContext from "../utils/userContext";
import { useState } from "react";

const App = ()=>{
    const[userName,setUserName] = useState("");
    const[authResponse,setAuthResponse]= useState(false);
    if(authResponse){
        
        return(
            <DashBoard/>
        )
    }
    return(
        <userContext.Provider value={{setUserName,setAuthResponse}}>
            <Login/>
        </userContext.Provider>
    )
}



export default App;