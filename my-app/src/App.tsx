import "./App.css";
import React, { useEffect, useState } from "react";
import booksInfo from "./api/booksInfo";
import BookPageComponent1 from "./BookComponent/BookComponent";
import BookPageComponent2 from "./BookComponent/BookPageComponent2";
import BookPageComponent3 from "./BookComponent/BookPageComponent3";
import BookPageComponent4 from "./BookComponent/BookPageComponent4";
import BookPageComponent5 from "./BookComponent/BookPageComponent5";
import BookPageComponent6 from "./BookComponent/BookPageComponent6";
import BookPageComponent7 from "./BookComponent/BookPageComponent7";

const App: React.FC = () => {
  //First useState for the data from the JSON, second is for the the new book component
  const [info, setInfo] = useState([] as any[]);
  const [showComponent, setShowComponent] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await booksInfo.get(`/data`);
        setInfo(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  //Function which truns useState from false to true(and the opposite) and triggers the if below that which renders the BookPageComponent
  const handleClick = (index: number) => {
    setShowComponent(index);
  };

  if (showComponent !== null) {
    switch (showComponent) {
      case 0:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent1 index={showComponent} />
          </div>
        );
      case 1:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent2 index={showComponent} />
          </div>
        );
      case 2:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent3 index={showComponent} />
          </div>
        );
      case 3:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent4 index={showComponent} />
          </div>
        );
      case 4:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent5 index={showComponent} />
          </div>
        );
      case 5:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent6 index={showComponent} />
          </div>
        );
      case 6:
        return (
          <div>
            <div
              className="fontAndSize-back"
              onClick={() => setShowComponent(null)}
            >
              Home
            </div>
            <BookPageComponent7 index={showComponent} />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="container">
      {info.map((obj, index) => {
        return (
          <div key={index}>
            <img
              onClick={() => handleClick(index)}
              className="img"
              src={obj.source}
              alt="book"
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
