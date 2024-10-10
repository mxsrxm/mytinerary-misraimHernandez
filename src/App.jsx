import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Cities from "./Pages/Cities"; 
import NotFound from "./Pages/NotFound";
import StandarLayout from "./Layouts/StandarLayout";
import DetailsLayout from "./Layouts/DetailsLayout";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Cities", element: <Cities /> }, 
    ],
  },
  {
    element: <DetailsLayout />,
    children: [
      { path: "/Details", element: <Details /> },
      { path: "/Details/:id/:name", element: <Details /> },
    ],
  },
  { path: "/*", element: <NotFound /> }, 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;