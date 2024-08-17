import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join from "@/routes/Join"; // We will define this later
import Home from "@/routes/Home"; // We will define this later
import PrivateRoute from "@/routes/PrivateRoute"; // We will define this later
const router = createBrowserRouter([
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
