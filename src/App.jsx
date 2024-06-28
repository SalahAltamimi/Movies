import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
const AppLayout = lazy(() => import("./pages/AppLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  { path: "*", element: <Error /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
