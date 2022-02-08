import { PayloadAction } from '@reduxjs/toolkit';
import { PostState } from '../state';

export const postCreateCommentReducer = (
  state: PostState,
  action: PayloadAction<any>
) => {
  state.comments = action.payload;
};
