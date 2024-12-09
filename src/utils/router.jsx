import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import CreerTontine from "../pages/CreerTontine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/creertontine",
        element: <CreerTontine />,
      },
    ],
  },
]);

export default router;