import axios from 'axios';
import react from 'react';


const APIkey = '&key=AIzaSyCuPJFww6YGX7RzIF1sPyo7hDy9Qe09Uqw';

export const getBooksByAPI = (keyWord = 'computers', category, sorting = 'newest', currentPage) => {

    let categorySortingParameter = '';
    if (category && (category !== 'all')) { categorySortingParameter = '+subject:' + category }

    let currentPageParameter = '';
    if (currentPage) { currentPageParameter = '&startIndex=' + (currentPage + 1) * 30 }

    return axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}${categorySortingParameter}&orderBy=${sorting}&maxResults=30${currentPageParameter}${APIkey}`)
        .then(response => {
            return response.data;
        })
}

