import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import MyList from "./pages/MyList.jsx";
import Credits from "./pages/Credits";

const router = createBrowserRouter([
  {
    patch: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mylist",
        element: <MyList />,
      },
      {
        path: "/credits",
        element: <Credits />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
