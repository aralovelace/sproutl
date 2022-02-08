import axios from "axios";
import { API_BASE_URL } from "../../data/env";

export const getPostCommentsHttp = async (
  id: string | string[] | undefined
) => {
  let error = null;
  let dataResponse = null;

  try {
    const response = await axios.get(API_BASE_URL + "/comments?postId=" + id);

    dataResponse = response.data;
  } catch (errorResponse) {
    error = errorResponse;
  }

  return { dataResponse, error };
};
