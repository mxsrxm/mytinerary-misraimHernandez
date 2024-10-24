import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Cities from "./Pages/Cities"; 
import NotFound from "./Pages/NotFound";
import StandarLayout from "./Layouts/StandarLayout";
import CitiesList from "./Components/CitiesList";

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <CitiesList><Home></Home></CitiesList> },
      { path: "/Home", element: <CitiesList><Home></Home></CitiesList> },
      { path: "/Cities", element: <CitiesList><Cities></Cities></CitiesList> },
      { path: "/Details", element: <Details /> },
      { path: "/Details/:id/:name", element: <Details /> },
    ],
  },
  { path: "/*", element: <NotFound></NotFound> }, 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  );
}

export default App;