
export interface PostsState {
  posts: any | null;
  loading?: boolean;
  clear?: null;
  error?: string;
}

export const initialPostsState: PostsState = {
  posts: null,
  error: '',
  loading: false,
  clear: null,
};
