import axios from "../../utils/axios";

export const getRelatedVideos = async (id: string | number, tags: string[]) => {
  const limit: number = 5;
  const queryStrig: string =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&limit=${limit}`
      : `id_ne=${id}&limit=${limit}`;
  const response = await axios.get(`/videos?${queryStrig}`);
  return response.data;
};
