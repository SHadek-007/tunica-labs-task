import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Paginate = ({ data: { pages, currentPage, setCurrentPage } }) => {
  const pagesArray = Array.from(Array(pages).keys());

  const getActivePage = (index) => {
    if (index === currentPage) {
      return "bg-red-700 text-white px-3";
    } else {
      return "bg-gray-400";
    }
  };
  return (
    <div className="flex gap-3 items-center">
      <span
        className="cursor-pointer"
        onClick={() => {
          if (currentPage > 0) setCurrentPage(currentPage - 1);
        }}
      >
        <FaAngleLeft />
      </span>
      <div className="page-container flex gap-3">
        {pagesArray.map((index) => (
          <span
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`page cursor-pointer px-3 py-1 ${getActivePage(index)}`}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <span
        className="cursor-pointer"
        onClick={() => {
          if (currentPage + 1 < pages) setCurrentPage(currentPage + 1);
        }}
      >
        <FaAngleRight />
      </span>
    </div>
  );
};

export default Paginate;
