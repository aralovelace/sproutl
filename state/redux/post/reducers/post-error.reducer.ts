import { PostState } from '../state';
import { PayloadAction } from '@reduxjs/toolkit';

export const postErrorReducer = (
  state: PostState,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = action.payload;
};
