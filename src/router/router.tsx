import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../components/shared/Error";
import Home from "../pages/Home";
import Services from "../components/Services/Services";
import Blogs from "../components/Blogs/Blogs";
import PrivateRoute from "./Private/PrivateRoute";
import AddServices from "../components/AddServices/AddServices";
import MyReview from "../components/MyReview/MyReview";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import ServiceDetailse from "../components/shared/ServiceDetailse/ServiceDetailse";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            `https://web-logic-by-sarwar-server-side.vercel.app/services/home`
          ),
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
