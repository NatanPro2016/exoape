import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PageTranstion from "./context/PageTranstion.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Works from "./pages/Works.tsx";
import WorksFix from "./pages/WorksFix.tsx";
import Contact from "./pages/Contact.tsx";
import FullPageScroll from "./pages/FullPageScroll.tsx";
import Studio from "./pages/Studio.tsx";

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
