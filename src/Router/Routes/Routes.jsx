import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services";
import ServiceDetailse from "../../Pages/Shared/ServiceDetailse/ServiceDetailse";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Blogs></Blogs>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetailse></ServiceDetailse>
      },
    ],
  },
]);

//exporting routes
export default router;
