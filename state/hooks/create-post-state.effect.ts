import { getSinglePostHttp } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux";
import { useRouter } from "next/router";
import { postSlice } from "../redux/post";

export const usePostCreateStateEffect = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const getPostState = useSelector((state: StoreState) => state.post.post);
  if (getPostState === null && id != null) {
    const getAllPost = getSinglePostHttp(id);
    getAllPost.then((post: any) => {
      if (post) {
        if (!post.dataResponse && post.error != null) {
          dispatch(postSlice.actions.error(post.error.message));
        } else {
          dispatch(postSlice.actions.add(post.dataResponse));
        }
      }
    });
  }
};
