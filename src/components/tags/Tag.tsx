import React from "react";
import { Tag as ITag } from "../../types";

interface IProps {
  tag: ITag;
}

const Tag: React.FC<IProps> = ({ tag }) => {
  return (
    <>
      <div className="bg-orange-100 border-2 border-orange-300  text-gray-900 px-4 py-1 hover:text-white hover:bg-orange-300 rounded-full cursor-pointer">
        {tag.title}
      </div>
    </>
  );
};

export default Tag;
