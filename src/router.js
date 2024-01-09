import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LatestPage from "./pages/LatestPage";
import TopPicksPage from "./pages/TopPicksPage";
import LayoutPage from "./pages/LayoutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SingleBookPage from "./pages/SingleBookPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutPage,
    children: [
      {
        path: "",
        Component: HomePage,
      },
      {
        path: "latest",
        Component: LatestPage,
      },
      { path: "/latest/books/:id", Component: SingleBookPage },
      {
        path: "top-picks",
        Component: TopPicksPage,
      },
      { path: "/top-picks/books/:id", Component: SingleBookPage },
      {
        path: "search/:keyword",
        Component: SearchPage,
      },
      {
        path: "search/:keywor/books/:id",
        Component: SingleBookPage,
      },
      {
        path: "books/:id",
        Component: SingleBookPage,
      },
    ],
  },

  { path: "/404", Component: NotFoundPage },
  { path: "*", Component: NotFoundPage },
]);

export default router;
