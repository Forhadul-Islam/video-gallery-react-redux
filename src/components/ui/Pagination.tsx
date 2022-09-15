import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { pageChanged } from "../../features/filter/filterSlice";

export default function Pagination() {
  const { videos, totalVideos } = useAppSelector((state) => state.videos);
  const { page: currentPage, postPerPage } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalVideos / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePagingation = (page: number) => {
    dispatch(pageChanged(page));
  };
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumbers.map((page) => (
          <div
            onClick={() => handlePagingation(page)}
            className={`${
              currentPage == page ? "bg-blue-600" : "bg-blue-300"
            } text-white px-4 py-1 rounded-full cursor-pointer`}
          >
            {page}
          </div>
        ))}
      </div>
    </section>
  );
}
