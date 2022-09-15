import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import { fetchVideo } from "../../features/video/videoSlice";
import { Video } from "../../types";
import LikeUnlike from "./LikeUnlike";
import Player from "./Player";
import RelatedVideoList from "./RelatedVideoList";

const VideoDescription: React.FC = () => {
  const { error, isError, isLoading, video } = useAppSelector(
    (state) => state.video
  );
  const { title, description, link, tags, date, id } = video as Video;
  const dispatch = useAppDispatch();
  const { videoId } = useParams<string>();
  const currentVideoId = videoId as string | number;
  useEffect(() => {
    const videoFetcher = async () => {
      const video = await dispatch(fetchVideo(currentVideoId)).unwrap();
      await dispatch(fetchRelatedVideos({ id: video?.id, tags: video?.tags }));
    };
    videoFetcher();
  }, [videoId, dispatch]);

  if (isLoading) {
    return <div className="mt-5 ml-5 col-span-12">Loading...</div>;
  } else if (!isLoading && isError) {
    return <div className="col-span-12">{error}</div>;
  }
  return (
    <>
      <section className="dark:bg-gray-200 pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player link={link} />

              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  {title}
                </h1>
                <div className="pb-4 flex items-center space-between border-b">
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                  </h2>

                  <LikeUnlike />
                </div>

                <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                  {description}
                </div>
              </div>
            </div>

            <RelatedVideoList tags={tags} id={id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoDescription;
