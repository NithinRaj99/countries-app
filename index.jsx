import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
