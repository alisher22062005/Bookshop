import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Book {
  title: string;
  describe: string;
  author: string;
  image: string;
}

interface BooksState {
  list: Book[];
  loading: boolean | null;
  error: string | null;
}

const initialState: BooksState = {
  list: [],
  loading: null,
  error: null,
};

export const fetchBooks = createAsyncThunk(
  "allBooks/fetchBooks",
  async ({ genre }: { genre: string }) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=10`
    );

    const data = res.data.items.map((item: any) => {
      return {
        title: item.volumeInfo.title,
        describe: item.volumeInfo.description,
        author: item.volumeInfo.authors?.[0],
        image: item.volumeInfo.imageLinks?.thumbnail,
      };
    });
    //   console.log(data);
    return data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default booksSlice.reducer;
