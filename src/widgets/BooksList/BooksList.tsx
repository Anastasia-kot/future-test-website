import styles from "./BooksList.module.css";
import React, { FC } from "react";
import BookCard from "../../entities/BookCard/BookCard";
import Preloader from "../../shared/Preloader/Preloader";
import { useSelector } from "react-redux";
import {  RootState } from "../../redux/redux-store";
import { Book } from "../../redux/app-reducer";
 
 
export const BooksList: FC = () => {
  const books: Book[] = useSelector((state: RootState) => state.appPage.books);
  const isFetching: boolean = useSelector(
    (state: RootState) => state.appPage.isFetching
  );
  const booksTotalCount = useSelector(
    (state: RootState) => state.appPage.booksTotalCount
  );
  
  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.totalBookCount}>
        Found {booksTotalCount ? booksTotalCount : " some "} results
      </div>

      <ul className={styles.bookCardsWrapper}>
        {books.map((book, index) => (
          <BookCard volumeInfo={book} key={index} index={index} />
        ))}
      </ul>

      {isFetching && <Preloader />}

 
    </div>
  );
};
  
