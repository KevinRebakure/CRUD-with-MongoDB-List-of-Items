import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageLayout from "./components/layouts/PageLayout";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";
import { RoutePaths } from "./constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: RoutePaths.INDEX, element: <HomePage /> },
      { path: RoutePaths.FORM_PAGE, element: <FormPage /> },
      { path: RoutePaths.LIST_PAGE, element: <ListPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
