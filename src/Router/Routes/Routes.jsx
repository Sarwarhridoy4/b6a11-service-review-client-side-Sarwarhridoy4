import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Services from "../../Pages/Services/Services";
import ServiceDetailse from "../../Pages/Shared/ServiceDetailse/ServiceDetailse";
import SignUp from "../../Pages/SignUp/SignUp";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        loader: ()=>fetch(`http://localhost:5000/services/home`),
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
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/services/:id",
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetailse></ServiceDetailse>
      },
    ],
  },
]);

//exporting routes
export default router;
