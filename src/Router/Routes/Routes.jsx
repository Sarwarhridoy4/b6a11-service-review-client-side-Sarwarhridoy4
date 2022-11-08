import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);

//exporting routes
export default router;
