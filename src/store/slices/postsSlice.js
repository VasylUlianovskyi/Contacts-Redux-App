import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPostsThunk = createAsyncThunk(
  'posts/getPosts',
  async (payload, thunkAPI) => {
    try {
      const { data } = await httpClient.get('/posts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPostsThunk.pending, (state, { payload }) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.posts = payload;
    });
    builder.addCase(getPostsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = postsSlice;

export default reducer;
