import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages
import Home from "./BookComponent/Home";
import BookPageComponent1 from "./BookComponent/BookComponent";
import BookPageComponent2 from "./BookComponent/BookPageComponent2";
import BookPageComponent3 from "./BookComponent/BookPageComponent3";
import BookPageComponent4 from "./BookComponent/BookPageComponent4";
import BookPageComponent5 from "./BookComponent/BookPageComponent5";
import BookPageComponent6 from "./BookComponent/BookPageComponent6";
import BookPageComponent7 from "./BookComponent/BookPageComponent7";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="book/1" element={<BookPageComponent1 index={0} />} />
      <Route path="book/2" element={<BookPageComponent2 index={1} />} />
      <Route path="book/3" element={<BookPageComponent3 index={2} />} />
      <Route path="book/4" element={<BookPageComponent4 index={3} />} />
      <Route path="book/5" element={<BookPageComponent5 index={4} />} />
      <Route path="book/6" element={<BookPageComponent6 index={5} />} />
      <Route path="book/7" element={<BookPageComponent7 index={6} />} />
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
