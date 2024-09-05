import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/home";

const publicRoutes = createBrowserRouter([
    {path : "/" , element: <HomePage></HomePage>}
   
])

export default publicRoutes