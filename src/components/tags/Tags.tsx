import React, { useEffect } from "react";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTags } from "../../features/tags/tagsSlice";

const Tags: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, isError, isLoading, tags } = useAppSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    !isLoading &&
    !isError &&
    tags.length > 0 && (
      <section className="mx-2">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b  overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </div>
      </section>
    )
  );
};

export default Tags;
