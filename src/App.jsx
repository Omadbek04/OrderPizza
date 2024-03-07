import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Order, { loader as orderLoader } from "./features/order/Order";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import AppLayout from "./components/AppLayout";
import Cart from "./features/cart/Cart";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import NotFound from "./components/Error";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <NotFound />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "order/:orderId",
          element: <Order />,
          errorElement: <NotFound />,
          loader: orderLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
