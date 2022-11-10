import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import MyReview from "../../Pages/MyReview/MyReview";
import Services from "../../Pages/Services/Services";
import ServiceDetailse from "../../Pages/Shared/ServiceDetailse/ServiceDetailse";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            `https://web-logic-by-sarwar-server-side.vercel.app/services/home`
          ),
        element: <Home></Home>,
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
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://web-logic-by-sarwar-server-side.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetailse></ServiceDetailse>,
      },
    ],
  },
]);

//exporting routes
export default router;
