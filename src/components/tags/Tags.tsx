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
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {!isLoading &&
          !isError &&
          tags.length > 0 &&
          tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
      </div>
    </section>
  );
};

export default Tags;
