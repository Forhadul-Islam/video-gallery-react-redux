import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchVideos } from "../../features/videos/videosSlice";
import { Video } from "../../types";
import VideoGridItem from "./VideoGridItem";

const VideoGrid: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, isError, videos } = useAppSelector(
    (state) => state.videos
  );
  const { tags, search } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  let videoContent;
  if (isLoading) {
    videoContent = <div className="col-span-12">Loading...</div>;
  } else if (!isLoading && isError) {
    videoContent = <div className="col-span-12">{error}</div>;
  } else if (!isLoading && !isError && videos?.length > 0) {
    videoContent = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12 mx-5">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {videoContent}
      </div>
    </section>
  );
};

export default VideoGrid;
