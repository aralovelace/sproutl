import { PostsState } from '../state';

export const postsLoadingReducer = (state: PostsState) => {
  state.loading = true;
};
