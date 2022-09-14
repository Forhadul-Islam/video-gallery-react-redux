import axios from "../../utils/axios";

export const getVideos = async (tags: string[], search: string) => {
  let queryString = "";
  queryString = tags.map((tag) => `tags_like=${tag}`).join("&") + `q=${search}`;
  const response = await axios.get(`/videos?${queryString}`);
  return response.data;
};
