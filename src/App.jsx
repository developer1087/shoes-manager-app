import { createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ShoeFormModal from "./modals/ShoeFormModal/ShoeFormModal";
import SingleShoeModal from "./modals/SingleShoeModal/SingleShoeModal";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ShoeCard from "./components/ShoeCard/ShoeCard";
import Spinner from "./components/Spinner/Spinner";
import SharedLayout from "./components/SharedLayout/SharedLayout";

import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "galleryPage",
        element: <GalleryPage />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
