import { createBrowserRouter } from "react-router-dom";
import Family from "../service/familyService";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
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
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/logout',
    element: <Logout />
  }
]);

export default Router;
