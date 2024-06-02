import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
// import { ProtectedRoute } from "./protectedRoute";
import App from "../App";

import Loader from "../common/Loader";
const NotFound = lazy(()=>import("../pages/NotFound"));
const CreateAccount = lazy(()=>import("../pages/CreateAccount"));
// Lazy Loading all the pages
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <CreateAccount />
          </Suspense>
        ),
      },
    

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;