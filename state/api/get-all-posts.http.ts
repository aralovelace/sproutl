import axios from "axios";
import { API_BASE_URL } from "../../data/env";

export const getAllPostsHttp = async () => {
  let error = null;
  let dataResponse = null;

  try {
    const response = await axios.get(API_BASE_URL + "/posts");

    dataResponse = response.data;
  } catch (errorResponse) {
    error = errorResponse;
  }

  return { dataResponse, error };
};
