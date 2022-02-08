import { useSelector } from 'react-redux';
import { StoreState } from '../redux';

export const useListSinglePost = () => {
  const getPostState = useSelector((state: StoreState) => state.post);
    return { PostState:getPostState };
}
