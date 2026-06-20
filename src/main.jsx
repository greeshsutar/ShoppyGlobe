import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App.jsx";

export default function Root() {
  return null;
}


const HomePage = lazy(() => import("./pages/ProductList.jsx"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail.jsx"));
const CartPage = lazy(() => import("./pages/Cart.jsx"));
const CheckoutPage = lazy(() => import("./pages/Checkout.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));
const About = lazy(() => import("./Component/About.jsx"));

const WithSuspense = ({ children }) => (
  <Suspense fallback={<div className="p-6">Loading...</div>}>{children}</Suspense>
);


function RootRouter() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <WithSuspense><HomePage /></WithSuspense> },
      { path: "about", element: <WithSuspense><About /></WithSuspense> },
      { path: "products/:id", element: <WithSuspense><ProductDetailPage /></WithSuspense> },
      { path: "cart", element: <WithSuspense><CartPage /></WithSuspense> },
      { path: "checkout", element: <WithSuspense><CheckoutPage /></WithSuspense> },
      { path: "*", element: <WithSuspense><NotFoundPage /></WithSuspense> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RootRouter />);


