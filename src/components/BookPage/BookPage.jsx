import styles from './Header.module.css';
import React from 'react';


const BookPage = () =>{

  return (
    <div className={styles.headerWrapper}>
      <div>
        <img alt='Book cover' />
      </div>
      <div>
        <p>Category/General</p>
        <p>Author, Book title</p>
        <p>Publisher</p>
        <p>Info about book</p>
      </div>
    </div>
  );

}
  


export default BookPage;
