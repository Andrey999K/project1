import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./utils/routesConfig.js";
import { PageLayout } from "./layouts/PageLayout.jsx";
import { Page } from "./pages/home/Page.jsx";
import { Inventory } from "./pages/inventory/Page.jsx";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <PageLayout />,
    children: [
      {
        path: Routes.HOME,
        element: <Page />,
      },
      {
        path: Routes.INVENTORY,
        element: <Inventory />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
