import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/app-reducer';
import Form from './Form/Form';
import styles from './Header.module.css';

const Header = (props) => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTitle}> 
        Search for books 
      </div>
      <Form getBooks={props.getBooks}/>
    </div>
  );

}
  

export default connect(null, { getBooks })(Header);
