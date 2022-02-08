import { PayloadAction } from '@reduxjs/toolkit';
import { PostState } from '../state';

export const postCreateReducer = (
  state: PostState,
  action: PayloadAction<any>
) => {
  state.post = action.payload;
};
