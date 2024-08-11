import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const POSTS_SLIACE_NAME = 'posts';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

export const getPostsThunk = createAsyncThunk(
  `${POSTS_SLIACE_NAME}/getPosts`,
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getPosts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  initialState,
  name: POSTS_SLIACE_NAME,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPostsThunk.pending, state => {
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
