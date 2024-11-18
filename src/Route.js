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
import ShowAllNhom from "../src/components/ShowAllNhom";
import ShowAllSanPham from "../src/components/ShowAllSanPham";
import AddNhom from "../src/components/AddNhom";
import Profile from "../src/components/Profile";

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
      // Nhom
      {
        path: "showAllNhom",
        element: <ShowAllNhom />,
      },
      {
        path: "addNhom",
        element: <AddNhom />,
      },
      // San Pham
      {
        path: "showAllSanPham",
        element: <ShowAllSanPham />,
      },
      // profile
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function RouteWeb() {
  return <RouterProvider router={router} />;
}
export default RouteWeb;
