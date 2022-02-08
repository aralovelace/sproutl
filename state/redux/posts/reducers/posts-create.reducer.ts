import { PayloadAction } from '@reduxjs/toolkit';
import { PostsState } from '../state';

export const postsCreateReducer = (
  state: PostsState,
  action: PayloadAction<any>
) => {
  state.posts = action.payload;
};
