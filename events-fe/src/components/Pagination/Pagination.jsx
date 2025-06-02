import React from "react";
import "./Pagination.css";

const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers, "pageNmbers");
  return (
    <nav className="pagination-nav">
      <p>Hello</p>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={"page-item"}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
