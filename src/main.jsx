import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Productitem from "./Component/Productitem.jsx";
import About from "./Component/About.jsx";
import Cart from "./Cart.jsx";
import ProductDetail from "./Component/ProductDetail.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Productitem />
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/products/:id",
        element:<ProductDetail/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);