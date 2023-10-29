import { createBrowserRouter } from "react-router-dom";
import Family from "../service/familyService";
import Register from "../pages/Register";
import Main from "../pages/Main";
const Router = createBrowserRouter([
  {
    path: "/family",
    element: <Family />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Main />
  }
]);

export default Router;
