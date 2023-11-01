import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/SignUp/Signup";
import Allcorce from "../Pages/Home/Corces/allcorce";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allcorce",
                element: <Allcorce></Allcorce>
            },
            {
                path: "/*",
                element: <PageNotFound></PageNotFound>
            },
            
        ]
    }
])