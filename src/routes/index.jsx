import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/pageLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import FAQ from "../pages/FAQ";
import Testimony from "../pages/testimony";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
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
        path: "/testimony",
        element: <Testimony />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;