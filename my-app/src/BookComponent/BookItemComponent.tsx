import "../App.css";
import booksInfo from "../api/booksInfo";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface Book {
  id: number;
  source: string;
  title: string;
  author: string;
  shortDesctiption: string;
  pages: number;
  isAvailable: boolean;
}

const BookItemComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pagesRead, setPagesRead] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    booksInfo
      .get(`/data/${id}`)
      .then((res) => {
        setBook(res.data);
        setTotalPages(res.data.pages);
        setIsAvailable(res.data.isOwned);

        const storedPagesRead = localStorage.getItem(`book-${id}-pages-read`);
        if (storedPagesRead) {
          setPagesRead(parseInt(storedPagesRead));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handlePagesReadChange = (e: any) => {
    const newPagesRead =
      e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    if (newPagesRead <= totalPages) {
      setPagesRead(newPagesRead);
      // Save pages read value to local storage
      localStorage.setItem(`book-${id}-pages-read`, newPagesRead.toString());
    }
  };

  const calculatePercentage = () => {
    const remainingPages = totalPages - pagesRead;
    return ((remainingPages / totalPages) * 100).toFixed(2) + "%";
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <Link className="removeDec" to="/">
          <button className="fontAndSize-back">Home</button>
        </Link>
      </div>
      <div className="containerSecond containerSecond-transformed">
        <div>
          <img className="componentImg" src={book.source} alt="i" />
        </div>
        <div className="InfoContainer containerSecond-transformed">
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <p className="description-transformed">{book.shortDesctiption}</p>
        </div>
      </div>

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

export default BookItemComponent;
