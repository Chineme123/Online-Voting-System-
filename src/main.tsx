import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Username from "./pages/Username.tsx";
import Password from "./pages/Password.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Vote from "./pages/Vote.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Confirmation from "./pages/Confirmation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/username",
    element: <Username />,
  },

  {
    path: "/password",
    element: <Password />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/vote",
    element: <Vote />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Confirmation /> */}
  </React.StrictMode>
);
