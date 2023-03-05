import "../App.css";
import booksInfo from "../api/booksInfo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Book } from "./interface";
import BookComponent from "./BookComponent";
interface BookItemComponentProps {
  id?: number | undefined;
}

const BookItemComponent = (props: BookItemComponentProps) => {
  const { id } = useParams<{ id: string }>();
  const realId = id === undefined ? props.id : id;
  const [book, setBook] = useState<Book | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pagesRead, setPagesRead] = useState(0);

  if (!Number.isInteger(Number(realId))) {
    throw new Error("Invalid book ID");
  }

  useEffect(() => {
    booksInfo
      .get(`/data/${realId}`)
      .then((res) => {
        setBook(res.data);
        setTotalPages(res.data.pages);

        const storedPagesRead = localStorage.getItem(
          `book-${realId}-pages-read`
        );
        if (storedPagesRead) {
          setPagesRead(parseInt(storedPagesRead));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [realId]);

  const handlePagesReadChange = (e: any) => {
    const newPagesRead =
      e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    if (newPagesRead <= totalPages) {
      setPagesRead(newPagesRead);
      localStorage.setItem(
        `book-${realId}-pages-read`,
        newPagesRead.toString()
      );
    } else {
      {
        console.log("Pages read cannot be greater than total pages.");
      }
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
      <BookComponent
        setTotalPages={(pages: number) => setTotalPages(pages)}
        handlePagesReadChange={(e: any) => handlePagesReadChange(e)}
        calculatePercentage={calculatePercentage}
        pagesRead={pagesRead}
        book={book}
      />
    </div>
  );
};

export default BookItemComponent;
