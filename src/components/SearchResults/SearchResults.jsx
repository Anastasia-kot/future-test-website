import styles from './SearchResults.module.css';
import React, { PureComponent } from 'react';
import BookCard from './BookCard/BookCard';
import { connect } from 'react-redux';
import { getBooks, loadMoreBooks  } from '../../redux/app-reducer.js';
import Preloader from '../Services/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

import { Card, Col, Row } from 'antd';

class SearchResults extends PureComponent {
  componentDidMount() {
    this.props.getBooks('ReactJS', 'all', 'newest', null)
  }
  
  render() {
    return (
      <div className={styles.mainContentWrapper}>
        
        <div className={styles.totalBookCount}> 
          Found {this.props.booksTotalCount ? this.props.booksTotalCount : 'some'} results 
        </div>
          

        {/* <div className={styles.bookCardsWrapper}> */}
          <div className="site-card-wrapper">

            <Row gutter={16}>
            {this.props.books.map(b => { return (
              <NavLink key={0+this.props.books.indexOf(b)} className={styles.bookCardWrapper}
                to={'/bookPage/' + this.props.books.indexOf(b)}>  
                  <BookCard book={b} key={this.props.books.indexOf(b)}/>
              </NavLink >  

            ) })}

            </Row>
        {/* </div>    */}
        </div>   

        {this.props.isFetching &&   <Preloader />   }


        <button className={styles.loadMoreButton}
          disabled={(this.props.currentPage + 1) * 30 >= this.props.booksTotalCount} 
          onClick={ () => 
            this.props.loadMoreBooks(
              this.props.searchParameters.keyWord, this.props.searchParameters.category, 
              this.props.searchParameters.sorting, this.props.currentPage)}>
            Load more
        </button>

      </div>);
  }
}  

 



const mapStateToProps = (state) => ({
  books: state.appPage.books,
  booksTotalCount: state.appPage.booksTotalCount,
  isFetching: state.appPage.isFetching,
  searchParameters: state.appPage.searchParameters,
  currentPage: state.appPage.currentPage,

});


export default connect(mapStateToProps, { getBooks, loadMoreBooks })(SearchResults);
