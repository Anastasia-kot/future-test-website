import { getBooksByAPI } from "../API/api";

const SET_BOOKS = 'SET_BOOKS';
const SET_BOOKS_TOTAL_COUNT = 'SET_BOOKS_TOTAL_COUNT';
const SET_IS_FETCHING_STATUS = 'SET_IS_FETCHING_STATUS';



let initialState = {
    books: [],
    booksTotalCount: null,
    isFetching: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_BOOKS:
            return { 
                ...state, 
                books: [...action.booksArray] 
        }

        case SET_BOOKS_TOTAL_COUNT:
            return { 
                ...state, 
                booksTotalCount: action.count 
        }

        case SET_IS_FETCHING_STATUS:
            return {
                ...state, 
                isFetching: action.isFetchingStatus
        }

        default:
            return state;
    }
}


export let setBooks = (booksArray) => ({ type: SET_BOOKS, booksArray });
export let setBooksTotalCount = (count) => ({ type: SET_BOOKS_TOTAL_COUNT, count });
export let setIsFetchingStatus = (isFetchingStatus) => ({ type: SET_IS_FETCHING_STATUS, isFetchingStatus });


export const getBooks = (keyWord, category, sorting) => (dispatch) => {
    dispatch(setIsFetchingStatus(true));
    getBooksByAPI(keyWord, category, sorting)
        .then(response => {
 
            dispatch(setBooks(response.items));
            dispatch(setBooksTotalCount(response.totalItems));
            dispatch(setIsFetchingStatus(false));

         })
}


export default appReducer;