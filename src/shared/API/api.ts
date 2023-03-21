import { Book } from './../../redux/app-reducer';
import axios from "axios";

const APIkey = "&key=AIzaSyCuPJFww6YGX7RzIF1sPyo7hDy9Qe09Uqw";

export type ResponseDataType = {
  data: ApiDataType;
};
export type ApiDataType = { kind: string; totalItems: number; items: Array<{volumeInfo: Book}>  };

export async function getBooksByAPI(
  keyWord = "computers",
  category = "",
  sorting = "newest",
  currentPage: number
) {
  let categorySortingParameter = "";
  if (category && category !== "all") {
    categorySortingParameter = "+subject:" + category;
  }

  let currentPageParameter = "";
  if (currentPage) {
    currentPageParameter = "&startIndex=" + (currentPage + 1) * 30;
  }

 
    const { data } = await axios.get<ResponseDataType>(
      `https://www.googleapis.com/books/v1/volumes?q=${keyWord}${categorySortingParameter}&orderBy=${sorting}&maxResults=30${currentPageParameter}${APIkey}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );


    return (data);
 
 
}
