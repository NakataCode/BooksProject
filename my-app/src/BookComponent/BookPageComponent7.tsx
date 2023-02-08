import "./bookPageComponent.css";
import booksInfo from "../api/booksInfo";
import React, { useEffect, useState } from "react";

interface NewComponentProps {
  index: number;
}

const BookPageComponent7: React.FC<NewComponentProps> = () => {
  //useState for the transfer of the JSON data:
  const [info, setInfo] = useState([] as any[]);
  //the next 3 "useState" are used for - 1. total pages of the book(which is already set, so the user knows how many pages is the book)
  //2. The second useState is for the pages that have been read by the user
  //3. The third useState is for if the book is available
  const [totalPages, setTotalPages] = useState(0);

  const [pagesRead, setPagesRead] = useState(
    parseInt(localStorage.getItem("Component7 - pagesRead") || "0", 10)
  );
  const [isAvailable, setIsAvailable] = useState(
    localStorage.getItem("Component7 - isAvailable") === "true"
  );

  //useEffect that is used for saving the user input, and if the book is available on the bookstore
  useEffect(() => {
    localStorage.setItem("Component7 - pagesRead", pagesRead.toString());
    localStorage.setItem("Component7 - isAvailable", isAvailable.toString());
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
        const res = await booksInfo.get("http://localhost:3000/data/7");
        setInfo([res.data]);
        setTotalPages(res.data.pages);
        setIsAvailable(res.data.isOwned);
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
          <div key={i} className="containerSecond containerSecond-transformed">
            <div>
              <img src={obj.source} alt="i" />
            </div>
            <div className="InfoContainer containerSecond-transformed">
              <h1>{obj.title}</h1>
              <h2>{obj.author}</h2>
              <p className="description-transformed">{obj.shortDesctiption}</p>
            </div>
          </div>
        );
      })}
      <div className="bottom containerSecond-transformed">
        <div className="input-container">
          <label className="fontAndSize">Total pages: </label>
          <input
            className="notAllowed"
            type="number"
            value={totalPages}
            onChange={(e) => setTotalPages(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="input-container">
          <label className="fontAndSize">Pages read:</label>
          <input
            type="number"
            value={pagesRead}
            onChange={handlePagesReadChange}
          />
          <div>
            <p>Remaining pages percentage: {calculatePercentage()}</p>
          </div>
        </div>
        <div className="available checkbox-styles">
          <input
            type="checkbox"
            id="cb5"
            className="checkbox checkbox-flip"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
          <label
            data-tg-off="Not available"
            data-tg-on="Available"
            htmlFor="cb5"
            className="change notAllowed"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default BookPageComponent7;
