import { createContext} from "react";

const userContext = createContext({
    "userName" : "",
    "authResponse" : "false"
})

export default userContext;