import React, { FC } from 'react';
import { BookSearch } from "../../features/BookSearch/BookSearch";
import styles from './Header.module.css';

const Header: FC = () => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTitle}>Search for books</div>
      <BookSearch />
    </div>
  );

}
  
export default Header;
