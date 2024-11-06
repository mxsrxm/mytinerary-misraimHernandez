import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Cities from "./Pages/Cities"; 
import NotFound from "./Pages/NotFound";
import StandarLayout from "./Layouts/StandarLayout";
import CitiesList from "./Components/CitiesList";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: "/", element: <CitiesList><Home /></CitiesList> },
      { path: "/Cities", element: <CitiesList><Cities /></CitiesList> },
      { path: "/Details/:id", element: <Details /> },
    ],
  },
  { path: "*", element: <NotFound /> }, 
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
