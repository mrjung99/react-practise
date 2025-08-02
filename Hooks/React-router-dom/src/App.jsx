import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import PageLayout from "./Components/layout/PageLayout";
import ErrorPage from "./pages/ErrorPage";
import { getApiData } from "./api/GetMpviesData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      errorElement: <ErrorPage />,
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
          path: "/movies",
          element: <Movies />,
          loader: getApiData,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
