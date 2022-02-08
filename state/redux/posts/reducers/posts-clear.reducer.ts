import { PostsState } from "..";

export const postsClearReducer = (state: PostsState) => {
  state.posts = null;

};
