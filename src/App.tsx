import React from "react";
import { RouterProvider } from "react-router";
import router from "./router/router";

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
