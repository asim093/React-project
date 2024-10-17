import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/home";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import Products from "../Pages/Home/products/Products";

const publicRoutes = createBrowserRouter([
    {path : "/" , element: <HomePage></HomePage>},
    {
        path:"Auth/Signup" , element: <Signup></Signup>
    },
    {
        path:"Auth/Login" , element: <Login></Login>
    },
    {
        path:"/Products" , element: <Products></Products>
    },
    
   
])

export default publicRoutes