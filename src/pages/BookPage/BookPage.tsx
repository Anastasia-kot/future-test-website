import styles from "./BookPage.module.css";
import React, { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/redux-store";
import Preloader from "../../shared/Preloader/Preloader";
import { addSeparator } from "../../shared/Helpers/mappers";
import Header from "../../widgets/Header/Header";
import { Book } from "../../redux/app-reducer";

const BookPage: FC = () => {
  const navigate = useNavigate();
  let URLbookId = useParams().id;
  const books = useSelector((state: RootState) => state.appPage.books);
  const [book, setBook] = useState<null | Book>(null);

  useEffect(() => {
    console.log('URLbookId', URLbookId);
    console.log("books", books);
    if (!URLbookId || !books[+URLbookId]) {
      navigate("/");
    } else {
      setBook(books[+URLbookId]);
      console.log('book', book);
     }
  }, [URLbookId, books, navigate]);

  return (
    <>
      {!book ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className={styles.bookPageWrapper}>
            <div className={styles.bookCoverWrapper}>
              <img
                className={styles.bookCover}
                alt="Book cover"
                src={
                  book?.imageLinks?.thumbnail
                    ? book.imageLinks.thumbnail
                    : "https://img.freepik.com/premium-vector/blank-book-cover_134452-8.jpg"
                }
              />
            </div>

            <div className={styles.bookInfoWrapper}>
              <div className={styles.bookCategory}>
                {book?.categories?.length > 0 &&
                  addSeparator(book?.categories, "/").join()}
              </div>

              <div className={styles.bookTitle}>
                {book?.authors?.length > 0 &&
                  addSeparator(book?.authors, ",").join()}
                {book?.authors?.length > 0 && book?.title && "  -  "}
                {book?.title ? book?.title : ""}
              </div>

              <div className={styles.bookPublisher}>
                {book.publisher ? book.publisher : "no publisher"}
              </div>

              <div className={styles.bookDescription}>
                {book?.description ? book.description : "no description"}
              </div>
            </div>
          </div>
        </>
      )} 
    </>
  );
   
};

export default BookPage;
