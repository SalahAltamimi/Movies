import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
const AppLayout = lazy(() => import("./ui/AppLayout"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/" }],
  },
]);
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
