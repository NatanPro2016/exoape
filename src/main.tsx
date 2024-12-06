import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import PageTranstion from "./context/PageTranstion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import FullPageScroll from "./pages/FullPageScroll";
import Studio from "./pages/Studio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/scroll",
    element: <FullPageScroll />,
  },
  {
    path: "/studio",
    element: <Studio />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageTranstion>
      <RouterProvider router={router} />
    </PageTranstion>
  </StrictMode>
);
