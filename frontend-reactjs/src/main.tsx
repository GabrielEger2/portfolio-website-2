// Import React and related modules
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the components used in the router
import App from "./App";
import Home from "./routes/Home";

// Import CSS file
import "./index.css";

// Define the routes using the createBrowserRouter method
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // The App component is the top-level element for the root path
    children: [
      { path: "/", element: <Home /> }, // The Main component is displayed at the root path

    ]
  },
]);

// Render the app using ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* The RouterProvider provides the router to the app */}
  </React.StrictMode>,
  document.getElementById("root")
);