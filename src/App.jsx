import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import FindDoctors from "./pages/FindDoctors";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/commune",
        element: <Forum />,
      },
      {
        path: "/find-doctors",
        element: <FindDoctors />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
