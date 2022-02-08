import {  PostState } from "..";

export const postClearReducer = (state: PostState) => {
  state.post = null;

};
