import { useSelector } from "react-redux";
import { StoreState } from "../redux";

export const useListAllCommentsEffect = () => {
  const getCommentsState = useSelector(
    (state: StoreState) => state.post.comments
  );
  return { CommentsState: getCommentsState };
};
