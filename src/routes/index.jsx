import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Template from "../template";
import App from "../App";
import Cart from "../pages/Cart";
import ListGames from "../pages/ListGames";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/",
        element: <Template />,
        children: [
            {
              path: "/home",
                element: <App />  
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/list-games",
                element: <ListGames />
            }

        ]
    }
])