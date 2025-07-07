import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  EightVoiced,
  Contact,
  Services,
  Portfolio,
  Search,
  PropertySearch,
  PropertyDetail,
  Map,
  RequestAccess,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/8voiced",
        element: <EightVoiced />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/property-search",
        element: <PropertySearch />,
      },
      {
        path: "/property-detail",
        element: <PropertyDetail />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/membership/request-access",
        element: <RequestAccess />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
