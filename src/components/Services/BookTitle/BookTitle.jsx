import React from 'react';

const BookTitle = (props) => {
    return (
        <div>
            {props.book.title ? props.book.title : ''}
        </div>
    )
}

export default BookTitle;