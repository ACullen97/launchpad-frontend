import React from "react";
import "./Pagination.css";

const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <div className="pagination">
        <a onClick={() => paginate(1)}>&laquo;</a>
        {pageNumbers.map((number) => {
          return (
            <a key={number} onClick={() => paginate(number)}>
              {number}
            </a>
          );
        })}
        <a onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}>
          &raquo;
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
