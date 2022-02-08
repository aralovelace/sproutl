import { PostsState } from '../state';
import { PayloadAction } from '@reduxjs/toolkit';

export const postsErrorReducer = (
  state: PostsState,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = action.payload;
};
