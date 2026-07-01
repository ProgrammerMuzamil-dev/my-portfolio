import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import ContectMe from "./pages/ContectMe/ContectMe.jsx";
import Projects from "./pages/Projects/Projects.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "AboutMe", element: <AboutMe /> },
      { path: "Projects", element: <Projects /> },

      { path: "ContectMe", element: <ContectMe /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
