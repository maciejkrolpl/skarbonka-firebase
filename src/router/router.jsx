import { createBrowserRouter } from "react-router-dom";
import Family from "../service/familyService";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Family />,
  },
]);

export default Router;
