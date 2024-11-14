import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Hello from "../src/components/Hello";
import Car from "../src/components/Car";
import Login from "../src/components/Login";
import ShowAllNhom from "../src/components/showAllNhom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "car",
        element: <Car />,
      },
      {
        path: "showAllNhom",
        element: <ShowAllNhom />,
      },
    ],
  },
]);

function RouteWeb() {
  return <RouterProvider router={router} />;
}
export default RouteWeb;
