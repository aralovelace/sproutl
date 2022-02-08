
export interface PostState {
  post: any | null;
  comments: any | null;
  loading?: boolean;
  clear?: null;
  error?: string;
}

export const initialPostState: PostState = {
  post: null,
  comments: null,
  error: '',
  loading: false,
  clear: null,
};
