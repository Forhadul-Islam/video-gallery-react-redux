import { AxiosResponse } from "axios";
import axios from "../../utils/axios";

export const getVideo = async (
  videoId: string | number
): Promise<AxiosResponse> => {
  const response = await axios.get(`/videos/${videoId}/`);
  return response.data;
};
