import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiDataType, getBooksByAPI } from "../shared/API/api";

interface GoogleArgsType extends SearchParameters {
  currentPage: number;
}

export const getBooks = createAsyncThunk(
  "app/getBooks",
  //@ts-ignore
  async (GoogleArgs: GoogleArgsType, thunkAPI): ResponseDataType => {
    try {
      const { keyWord, category, sorting, currentPage } = GoogleArgs;
      const data = await getBooksByAPI(keyWord, category, sorting, currentPage);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const loadMoreBooks = createAsyncThunk(
  "app/loadMoreBooks",
  //@ts-ignore
  async (GoogleArgs: GoogleArgsType, thunkAPI): ResponseDataType => {
    try {
      const { keyWord, category, sorting, currentPage } = GoogleArgs;
      const data = await getBooksByAPI(keyWord, category, sorting, currentPage);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  categories: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}
export interface SearchParameters {
  keyWord: string;
  category: string;
  sorting: string;
}
export interface initialStateType {
  books: Book[];
  booksTotalCount: number | null;
  isFetching: boolean;
  searchParameters: SearchParameters;
  currentPage: number;
}

let initialState: initialStateType = {
  books: [],
  booksTotalCount: null,
  isFetching: false,
  searchParameters: {
    keyWord: "ReactJS",
    category: "",
    sorting: "newest",
  },
  currentPage: 0,
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setSearchParameters(state, action: PayloadAction<SearchParameters>) {
      state.searchParameters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        getBooks.fulfilled,
        (state, action: PayloadAction<ApiDataType>) => {
          state.books = action.payload.items.map((i) => i.volumeInfo);
          state.booksTotalCount = action.payload.totalItems;
          state.currentPage = 0;

          state.isFetching = false;
        }
      )
      .addCase(getBooks.rejected, (state, action) => {
        state.books = [];
        state.isFetching = false;
        state.booksTotalCount = null;
      })

      .addCase(loadMoreBooks.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        loadMoreBooks.fulfilled,
        (state, action: PayloadAction<ApiDataType>) => {
          state.books.push(...action.payload.items.map((i) => i.volumeInfo));
          state.currentPage = state.currentPage + 1;

          state.isFetching = false;
        }
      )
      .addCase(loadMoreBooks.rejected, (state, action) => {
        state.isFetching = false;
      });
  },
});

export const { setSearchParameters } = AppSlice.actions;
export default AppSlice.reducer;
