import { createSlice } from '@reduxjs/toolkit';
import { postsLoadingReducer } from './reducers/posts-loading.reducer';
import { postsErrorReducer } from './reducers/posts-error.reducer';
import { postsClearReducer } from './reducers/posts-clear.reducer';
import { initialPostsState } from './state';
import { postsCreateReducer } from './reducers/posts-create.reducer';

export const postsSlice = createSlice({
  name: 'Posts',
  initialState: initialPostsState,
  reducers: {
    loading: postsLoadingReducer,
    error: postsErrorReducer,
    clear: postsClearReducer,
    add: postsCreateReducer,
  },
});

export const postsReducer = postsSlice.reducer;
