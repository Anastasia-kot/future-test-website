import styles from './Books.module.css';
import React, { PureComponent } from 'react';
import BookCard from './BookCard/BookCard';
import axios from 'axios';
import { connect } from 'react-redux';
import { getBooks  } from '../../redux/app-reducer.js';
import Preloader from '../Services/Preloader';

class Books extends PureComponent {
  componentDidMount() {
    
    // getBooksInitialize()
    //   .then(response => {
    //     this.props.setBooks(response.items);
    //     this.props.setBooksTotalCount(response.totalItems);
        
    //   })
    this.props.getBooks('flowers', 'all', 'newest')
      
  }
  
  render() {
    return (
      this.props.isFetching
      ?   <Preloader />    
      : <div className={styles.mainContentWrapper}>
        <div className={styles.totalBookCount}> Found {this.props.booksTotalCount ? this.props.booksTotalCount : 'some'} results </div>
          

        <div className={styles.bookCardsWrapper}>
        {this.props.books.map(b => { return (<BookCard book={b}/>) })}
        </div>   

       <button>Load more</button>

      </div>);
  }
}  

const mapStateToProps = (state) => ({
  books: state.appPage.books,
  booksTotalCount: state.appPage.booksTotalCount,
  isFetching: state.appPage.isFetching,
});


export default connect(mapStateToProps, { getBooks })(Books);
