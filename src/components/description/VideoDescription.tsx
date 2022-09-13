import React from "react";
import LikeUnlike from "./LikeUnlike";
import Player from "./Player";
import RelatedVideoList from "./RelatedVideoList";

const VideoDescription: React.FC = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />

              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  Some video title
                </h1>
                <div className="pb-4 flex items-center space-between border-b">
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on 23 Nov 2022
                  </h2>

                  <LikeUnlike />
                </div>

                <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                  Some video description here
                </div>
              </div>
            </div>

            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoDescription;
