import { createRoot } from 'react-dom/client';
import App from './components/App';
import DashBoard from './components/Dashboard';
import Logout from './components/Logout';
import Employees from './components/Employees';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
    },
    {
        path:"/loggedIn",
       
        children:[
            {
                path:"/loggedIn/",
                element:<DashBoard/>
            },
            {
                path:"/loggedIn/createEmployee",
                element:<Employees/>
            },
            {
                path:"/loggedIn/logout",
                element:<Logout/>
            }
        ]
    }
])
root.render(
    <RouterProvider router={appRoute}/>
);

