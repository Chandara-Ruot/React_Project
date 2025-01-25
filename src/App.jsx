import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
      {
        path: "service",
        element: <h2>Service</h2>,
      },
      {
        path: "accessory",
        element: <h2>Accessories page</h2>,
      },
      {
        path: "about",
        element: <h2>About page</h2>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
