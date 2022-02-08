import { getPostCommentsHttp } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux";
import { useRouter } from "next/router";
import { postSlice } from "../redux/post";

export const usePostCommentStateEffect = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const getPostCommentState = useSelector(
    (state: StoreState) => state.post.comments
  );
  if (
    id != null &&
    (getPostCommentState === null)
  ) {
    const getAllPostComments = getPostCommentsHttp(id);
    getAllPostComments.then((comment: any) => {
      if (comment) {
        if (!comment.dataResponse && comment.error != null) {
          dispatch(postSlice.actions.error(comment.error.message));
        } else {
          dispatch(postSlice.actions.addComment(comment.dataResponse));
        }
      }
    });
  }
};
