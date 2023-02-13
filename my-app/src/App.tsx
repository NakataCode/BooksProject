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

const bookComponents = [
  BookPageComponent1,
  BookPageComponent2,
  BookPageComponent3,
  BookPageComponent4,
  BookPageComponent5,
  BookPageComponent6,
  BookPageComponent7,
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      {bookComponents.map((Component, index) => (
        <Route key={index} path={`book/${index + 1}`} element={<Component />} />
      ))}
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
