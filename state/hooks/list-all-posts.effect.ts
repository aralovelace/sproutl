import { useSelector } from 'react-redux';
import { StoreState } from '../redux';

export const useListAllPostsEffect = () => {
  const getPostsState = useSelector((state: StoreState) => state.posts.posts);
    return { PostsState:getPostsState };
}
