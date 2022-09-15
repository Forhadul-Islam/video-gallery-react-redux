import React, { useEffect } from "react";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTags } from "../../features/tags/tagsSlice";
import { pageChanged, resetFilter } from "../../features/filter/filterSlice";

const Tags: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, isError, isLoading, tags } = useAppSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const handleResetFilters = () => {
    dispatch(resetFilter());
    dispatch(pageChanged(1));
  };
  return (
    <>
      {!isLoading && !isError && tags.length > 0 && (
        <section className="mx-2">
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b  overflow-y-auto">
            {tags.map((tag) => (
              <Tag key={tag.id} title={tag.title} />
            ))}
          </div>
        </section>
      )}
      <div className="flex justify-end mr-5 ">
        <button
          onClick={handleResetFilters}
          className="px-5 py-3 ring-2 text-xl font-semibold uppercase text-gray-900 font-mono hover:rounded-sm transition-all shadow-md  duration-100 hover:bg-slate-300"
        >
          Reset Filters
        </button>
      </div>
    </>
  );
};

export default Tags;
