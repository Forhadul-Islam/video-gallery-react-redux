import axios from "../../utils/axios";

export const getVideos = async (
  tags: string[],
  search: string,
  page: number,
  limit: number
) => {
  let queryString = "";
  queryString =
    tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&_page=${page}&_limit=${limit}&q=${search}`;
  const response = await axios.get(`/videos?${queryString}`);
  const url = tags.map((tag) => `tags_like=${tag}`).join("&") + `&q=${search}`;
  const videoCount = await getVideoNumber(`videos?${url}`);
  return { videos: response.data, videoCount };
};

const getVideoNumber = async (url: string) => {
  const res = await axios.get(url);
  return res.data?.length;
};
