import { createSlice } from "@reduxjs/toolkit";
import { postLoadingReducer } from "./reducers/post-loading.reducer";
import { postErrorReducer } from "./reducers/post-error.reducer";
import { postClearReducer } from "./reducers/post-clear.reducer";
import { initialPostState } from "./state";
import { postCreateReducer } from "./reducers/post-create.reducer";
import { postCreateCommentReducer } from "./reducers/post-create-comment.reducer";

export const postSlice = createSlice({
  name: "Post & Comment",
  initialState: initialPostState,
  reducers: {
    loading: postLoadingReducer,
    error: postErrorReducer,
    clear: postClearReducer,
    add: postCreateReducer,
    addComment: postCreateCommentReducer,
  },
});

export const postReducer = postSlice.reducer;
