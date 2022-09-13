import React from "react";
import { Link } from "react-router-dom";
import { Video } from "../../types";

interface IVideo {
  video: Video;
}

const VideoGridItem: React.FC<IVideo> = ({ video }) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`videos/${video.id}`}>
            <img
              src={video.thumbnail}
              className="w-full h-auto"
              alt={video.author}
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {video.duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to={`videos/${video.id}`} className="shrink-0">
            <img
              src={video.avatar}
              className="rounded-full h-6 w-6"
              alt={video.author}
            />
          </Link>

          <div className="flex flex-col">
            <Link to={`videos/${video.id}`}>
              <p className="text-slate-900 text-sm font-semibold">
                {video.title}
              </p>
            </Link>
            <Link
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              to={`videos/${video.id}`}
            >
              Learn with Sumit
            </Link>
            <p className="text-gray-400 text-xs mt-1">
              {video.views} views . May 3, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
