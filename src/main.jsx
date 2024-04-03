import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesRead from "./pages/PagesRead.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import CardDetails from "./pages/CardDetails.jsx";
import ReadBooks from "./components/ReadBooks.jsx";
import WishlistBooks from "./components/WishlistBooks.jsx";
import Contact from "./pages/Contact.jsx";

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
        path: '/CardDetails/:bookId',
        element: <CardDetails />,
        loader: () => fetch('/BookData.json'),
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks />,
        loader: () => fetch('/BookData.json'),
        children:[
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: 'WishlistBooks',
            element: <WishlistBooks />
          }
        ]
      },
      {
        path: "/PagesRead",
        element: <PagesRead />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
