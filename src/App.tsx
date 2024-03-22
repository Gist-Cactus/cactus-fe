import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/home/Index";
import SlidesPage from "./pages/slides/Index";
import Paths from "./paths";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={Paths.HOME} element={<HomePage />} />
        <Route path={Paths.SLIDES} element={<SlidesPage />} />
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
