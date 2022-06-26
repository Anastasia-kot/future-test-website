import React from 'react';
import Form from './Form/Form';
import styles from './Header.module.css';

const Header = () => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTitle}> 
        Search for books 
      </div>
      <Form/>
    </div>
  );

}
  


export default Header;
