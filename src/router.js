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
      {
        path: "top-picks",
        Component: TopPicksPage,
      },
      {
        path: "search/:keyword",
        Component: SearchPage,
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
