import { PostState } from "../state";

export const postLoadingReducer = (state: PostState) => {
  state.loading = true;
};
