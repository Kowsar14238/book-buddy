import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesRead from "./pages/PagesRead.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import CardDetails from "./pages/CardDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => fetch('/BookData.json'),
        element: <Home />,
      },
      {
        path: '/:bookId',
        loader: () => fetch('/BookData.json'),
        element: <CardDetails />,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks />,
      },
      {
        path: "/PagesRead",
        element: <PagesRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
