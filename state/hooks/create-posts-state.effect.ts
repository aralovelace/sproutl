import { getAllPostsHttp } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice, StoreState } from "../redux";

export const usePostsCreateStateEffect = () => {
  const dispatch = useDispatch();
  const getPostsState = useSelector((state: StoreState) => state.posts.posts);
  if (getPostsState === null) {
    const getAllPosts = getAllPostsHttp();
    getAllPosts.then((post: any) => {
      if (post) {
        if (!post.dataResponse && post.error != null) {
          dispatch(postsSlice.actions.error(post.error.message));
        } else {
          dispatch(postsSlice.actions.add(post.dataResponse));
        }
      }
    });
  }
};
