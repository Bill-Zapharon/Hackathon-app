import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import CreerTontine from "../pages/CreerTontine";
import TontinePage from "../pages/TontinePage";
import TontineDetails from "../pages/TontineDetails";
import EnAttente from "../pages/EnAttente";
import TontinesAdmin from "../pages/TontinesAdmin";
import TontineDetailsAdmin from "../pages/TontinesDetailsAdmin";

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
      {
        path: "/listestontine",
        element: <TontinePage />,
      },
      {
        path: "/tontine/:id",
        element: <TontineDetails />,
      },
      {
        path: "/en-attente/:id",
        element: <EnAttente />,
      },
      {
        path: "/user/:userId/tontines",
        element: <TontinesAdmin />,
      },
      {
        path: "/user/:userId/tontines/:tontineId",
        element: <TontineDetailsAdmin />,
      },
    ],
  },
]);
export default router;