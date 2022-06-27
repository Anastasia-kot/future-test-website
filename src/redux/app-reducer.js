import { getBooksByAPI } from "../API/api";

const SET_BOOKS = 'SET_BOOKS';
const SET_BOOKS_TOTAL_COUNT = 'SET_BOOKS_TOTAL_COUNT';
const SET_IS_FETCHING_STATUS = 'SET_IS_FETCHING_STATUS';
const SET_SEARCH_PARAMETERS = 'SET_SEARCH_PARAMETERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ADD_LOADED_BOOKS = 'ADD_LOADED_BOOKS';





let initialState = {
    books: [

    ],
    booksTotalCount: null,
    isFetching: false,
    searchParameters: {
        keyWord: null, 
        category: null, 
        sorting:null
    },
    currentPage: 0,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_BOOKS:
            return {
                ...state, 
                books: [...action.booksArray] 
            }

        case ADD_LOADED_BOOKS:
            return {
                ...state, 
                books: [...state.books,  ...action.booksArray] 
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
        case SET_SEARCH_PARAMETERS:
            return {
                ...state, 
                searchParameters: {...action.searchParameters}
        }
        case SET_CURRENT_PAGE:
            return {
                ...state, 
                currentPage:  action.currentPage 
        }

        default:
            return state;
    }
}


export let setBooks = (booksArray) => ({ type: SET_BOOKS, booksArray });
export let setBooksTotalCount = (count) => ({ type: SET_BOOKS_TOTAL_COUNT, count });
export let setIsFetchingStatus = (isFetchingStatus) => ({ type: SET_IS_FETCHING_STATUS, isFetchingStatus });

export let setSearchParameters = (searchParameters) => ({ type: SET_SEARCH_PARAMETERS, searchParameters });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let addLoadedBooks = (booksArray) => ({ type: ADD_LOADED_BOOKS, booksArray });



export const getBooks = (keyWord, category, sorting, currentPage) => (dispatch) => {
    dispatch(setIsFetchingStatus(true));
    getBooksByAPI(keyWord, category, sorting, currentPage)
        .then(response => {

            dispatch(setBooksTotalCount(response.totalItems));

            let newItems = response.items.map(i => i.volumeInfo);

            dispatch(setBooks(newItems));
            dispatch(setIsFetchingStatus(false));
            dispatch(setSearchParameters({ keyWord: keyWord, category: category, sorting:sorting }))
            dispatch(setCurrentPage('0'))
         })
}

export const loadMoreBooks = (keyWord, category, sorting, currentPage) => (dispatch) => {
    
    dispatch(setIsFetchingStatus(true));
    getBooksByAPI(keyWord, category, sorting, currentPage)
        .then(response => {
            let newItems = response.items.map(i => i.volumeInfo);

            dispatch(addLoadedBooks(newItems));
            dispatch(setIsFetchingStatus(false));
            currentPage++;
            dispatch(setCurrentPage(currentPage));

         })
}



export default appReducer;