import { useState, useEffect } from "react";
import BOOK_DATA from "../Data/book";
import Book from "../BookList/Book";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(BOOK_DATA);
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">All books</h1>
      <div div className="row">
        {
        books.map((category, index) => (
          <Book key={index} data={category} />

        ))
        }
      </div>
    </div>
  );
};
export default BookList;
