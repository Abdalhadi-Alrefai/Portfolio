import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import Viewproject from "./pages/Viewproject";

const Routes = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "viewproject/:id",
        element: <Viewproject />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
