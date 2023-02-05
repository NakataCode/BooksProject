import "./bookPageComponent.css";
import booksInfo from "../api/booksInfo";
import React, { useEffect, useState } from "react";

interface NewComponentProps {
  index: number;
}

const BookPageComponent2: React.FC<NewComponentProps> = () => {
  //useState for the transfer of the JSON data:
  const [info, setInfo] = useState([] as any[]);
  //the next 3 "useState" are used for - 1. total pages of the book(which is already set, so the user knows how many pages is the book)
  //2. The second useState is for the pages that have been read by the user
  //3. The third useState is for if the book is available
  const [totalPages, setTotalPages] = useState(512);

  const [pagesRead, setPagesRead] = useState(
    parseInt(localStorage.getItem("Component2 - pagesRead") || "0", 10)
  );
  const [isAvailable, setIsAvailable] = useState(
    localStorage.getItem("Component2 - isAvailable") === "true"
  );

  //useEffect that is used for saving the user input, and if the book is available on the bookstore
  useEffect(() => {
    localStorage.setItem("Component2 - pagesRead", pagesRead.toString());
    localStorage.setItem("Component2 - isAvailable", isAvailable.toString());
  }, [pagesRead, isAvailable]);

  //Calculating the percentage of the remaining pages
  const calculatePercentage = () => {
    const remainingPages = totalPages - pagesRead;
    return ((remainingPages / totalPages) * 100).toFixed(2) + "%";
  };

  //handlePagesReadChange is used for the input where the user is entering how many pages he had read
  //The user can delete, add and most importantly, cannot go over the pages that the book is set to!
  const handlePagesReadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPagesRead =
      e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    if (newPagesRead <= totalPages) {
      setPagesRead(newPagesRead);
    }
  };

  //Fetching data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await booksInfo.get("http://localhost:3000/data/2");
        setInfo([res.data]);
        setTotalPages(res.data.pages);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {info.map((obj, i) => {
        return (
          <div key={i} className="containerSecond">
            <img src={obj.source} alt="i" />
            <div>
              <h1>{obj.title}</h1>
              <h2>{obj.author}</h2>
              <p>{obj.shortDesctiption}</p>
            </div>
          </div>
        );
      })}
      <div className="bottom">
        <div>
          <div>
            <label className="fontAndSize">Total pages: </label>
            <input
              type="number"
              value={totalPages}
              onChange={(e) => setTotalPages(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label className="fontAndSize">Pages read:</label>
            <input
              type="number"
              value={pagesRead}
              onChange={handlePagesReadChange}
            />
          </div>
          <div>
            <p>Remaining pages percentage: {calculatePercentage()}</p>
          </div>
        </div>
        <div className="checkbox-wrapper-2">
          <input
            type="checkbox"
            id="input"
            className="sc-gJwTLC ikxBAC"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
          <label className="fontAndSize">Available</label>
        </div>
      </div>
    </div>
  );
};

export default BookPageComponent2;
