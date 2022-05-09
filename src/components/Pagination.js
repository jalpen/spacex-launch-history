import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/pagination.css';

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
`;

const Left = 'left';
const Right = 'right';
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Paginations = (props) => {
  const {
    totalRecords,
    pageLimit,
    pageNeighbours,
    onPageChanged,
    currentPage,
  } = props;
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [setTotalPages]);

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const checkLeft = startPage > 2;
      const checkRight = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case checkLeft && !checkRight: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [Left, ...extraPages, ...pages];
          break;
        }
        case checkLeft && checkRight:
        default: {
          pages = [Left, ...pages, Right];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];
  return (
    <PaginationList className="pagination">
      {pages.map((page, index) => {
        if (page === Left)
          return (
            <li key={index} className="page-item">
              <a
                href="/"
                className="page-link"
                aria-label="Previous"
                onClick={(e) => onPageChanged(e, pageNeighbours * 2 - 1)}
              >
                <span aria-hidden="true">&#8656;</span>
              </a>
            </li>
          );

        if (page === Right)
          return (
            <li key={index} className="page-item">
              <a
                className="page-link"
                href="/"
                aria-label="Next"
                onClick={(e) => onPageChanged(e, pageNeighbours * 2 + 3)}
              >
                <span aria-hidden="true">&#8658;</span>
              </a>
            </li>
          );

        return (
          <li
            key={index}
            className={`page-item${currentPage === page ? ' active' : ''}`}
          >
            <a
              className="page-link"
              href="/"
              onClick={(e) => onPageChanged(e, page)}
            >
              {page}
            </a>
          </li>
        );
      })}
    </PaginationList>
  );
};

export default Paginations;
