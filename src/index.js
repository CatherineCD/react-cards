import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import CardInfo from "./pages/card-info";
import CardList from "./pages/card-list";
import NewCard from "./pages/new-card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/card-info",
    element: <CardInfo/>,
  },
  {
    path: "/card-list",
    element: <CardList/>,
  },
  {
    path: "/new-card/:id",
    element: <NewCard/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);