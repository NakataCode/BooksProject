import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages
import Home from "./BookComponent/Home";
import BookItemComponent from "./BookComponent/BookItemComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/book/:id" element={<BookItemComponent />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
