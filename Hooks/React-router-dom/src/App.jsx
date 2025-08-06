import React from "react";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Movies from "./Components/pages/Movies";
import Contact from "./Components/pages/Contact";
import PageLayout from "./Components/layout/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getApiData } from "./api/GetMpviesData";
import MovieDetail from "./Components/ui/MovieDetail";
import { getMovieDetails } from "./api/GetMovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
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
          path: "/movies/:movieID",
          element: <MovieDetail />,
          loader: getMovieDetails,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
