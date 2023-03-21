// import styles from "./SearchResults.module.css";
import React, { FC, useEffect } from "react";
import { shallowEqual, useDispatch } from "react-redux";
 
import {  getBooks } from "../../redux/app-reducer";
import Header from "../../widgets/Header/Header";
import { BooksList } from "../../widgets/BooksList/BooksList";
import { LoadMore } from "../../features/LoadMore/LoadMore";

const SearchResults: FC = () => {
 
 
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(getBooks({
      keyWord: "ReactJS",
      category: "",
      sorting: "newest",
      currentPage: 0,
    }));
  }, []);

  return (
    <>
       <Header/>
       <BooksList/>
       <LoadMore/>
    </>
  );
};
export default SearchResults;
