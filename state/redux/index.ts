import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { initialPostsState, postsReducer, PostsState } from "./posts";
import { initialPostState, postReducer, PostState } from "./post";

let store: any;

export * from "./posts";

export type StoreState = {
  posts: PostsState;
  post: PostState;
};

export const initialState: StoreState = {
  posts: initialPostsState,
  post: initialPostState,
};

const reducers = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

function initStore(preloadedState = initialState) {
  return configureStore({
    reducer: reducers,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const initializeStore = (preloadedState: StoreState) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
