import { createBrowserRouter } from "react-router";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [ ...future nested routes... ]
  },
]);

export default router;
