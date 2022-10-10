import styles from './BookCard.module.css';
import React from 'react';
import { mapArrayToStringWithSeparator } from '../../../Helpers/mappers.js';
import { Card, Col } from 'antd';
// import BookCover from '../../Services/BookCover/BookCover';


const BookCard = (props) =>{


  return (
    <Col span={30}>
      <Card title={props.book.title ? props.book.title : ''} bordered={false}>
      {/* <div className={styles.bookCardWrapper}> */}

        {props.book.imageLinks?.smallThumbnail
          ? <img className={styles.bookCover} alt='Book cover'
            src={props.book.imageLinks?.smallThumbnail  } />
          : <div className={styles.bookCover}></div>
        }
        


        <div className={styles.bookCategory}>
          {(props.book.categories?.length > 0)
            ? props.book.categories[0]
            : 'no categories'}
        </div>



         <div className={styles.bookTitle}>
          {props.book.title ? `${props.book.title.substring(0, 35)} ...` : 'no title'} 
        </div>





        <div className={styles.bookAuthor}>
          {(props.book.authors?.length > 0)
            ? mapArrayToStringWithSeparator(props.book.authors, ', ')
            : ''
          }
        </div>
      {/* </div> */}
    </Card>
    </Col>

)}
  

export default BookCard;




