import "../App.css";
import { Book } from "./interface";
import "../BookStyles.css";
interface BookProps {
  book: Book;
  setTotalPages: Function;
  handlePagesReadChange: Function;
  calculatePercentage: Function;
  pagesRead: number;
}

const BookComponent = (props: BookProps) => {
  const book = props.book;
  return (
    <div>
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
            value={book.pages}
            onChange={(e) => props.setTotalPages(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="input-container">
          <label className="fontAndSize">Pages read:</label>
          <input
            type="number"
            value={props.pagesRead}
            onChange={(e) => props.handlePagesReadChange(e)}
          />

          <div>
            <p>Remaining pages percentage: {props.calculatePercentage()}</p>
          </div>
        </div>
        <div className="available checkbox-styles">
          <input
            type="checkbox"
            id="cb5"
            className="checkbox checkbox-flip"
            checked={book.isOwned}
            onChange={(e) => e.target.checked}
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

export default BookComponent;
