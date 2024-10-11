import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/home";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";

const publicRoutes = createBrowserRouter([
    {path : "/" , element: <HomePage></HomePage>},
    {
        path:"Auth/Signup" , element: <Signup></Signup>
    },
    {
        path:"Auth/Login" , element: <Login></Login>
    },
    
   
])

export default publicRoutes