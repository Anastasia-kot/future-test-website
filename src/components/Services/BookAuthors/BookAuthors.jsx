import React from 'react';
import { mapArrayToStringWithSeparator } from '../../../Helpers/mappers';

const BookAuthors = (props) => {
    return (
        <div>
            {(props.book.authors?.length > 0)
                ? mapArrayToStringWithSeparator(props.book.authors, ', ')
                : ''
            }
        </div>
    )
}

export default BookAuthors;