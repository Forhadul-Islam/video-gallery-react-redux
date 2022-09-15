import { AxiosResponse } from "axios";
import { Video } from "../../types";
import axios from "../../utils/axios";

export const getVideo = async (videoId: string | number) => {
  const response = await axios.get(`/videos/${videoId}/`);
  return response.data;
};
