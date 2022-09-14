import React from "react";

interface IProps {
  link: string;
}

const Player: React.FC<IProps> = ({ link }) => {
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title="Some video title"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Player;
