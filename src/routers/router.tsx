import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Detail from "../pages/Detail";
import AllMovies from "../pages/AllMovies";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/detail/:id",
    element: <Detail />,
  },
  {
    path: "/movies/:categorie",
    element: <AllMovies />,
  },
]);
