import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { tagAdded, tagRemoved } from "../../features/filter/filterSlice";

interface IProps {
  title: string;
}

const Tag: React.FC<IProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.filter);
  const isSelected = tags.includes(title);
  const handleTagSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagAdded(title));
    }
  };
  const style = isSelected
    ? "bg-gray-600 border-2 border-white text-white px-4 py-1  rounded-full cursor-pointer"
    : "bg-orange-100 border-2 border-orange-200  text-gray-900 px-4 py-1 hover:bg-gray-800 hover:border-white hover:text-white rounded-full cursor-pointer";
  return (
    <>
      <div onClick={handleTagSelect} className={style}>
        {title}
      </div>
    </>
  );
};

export default Tag;
