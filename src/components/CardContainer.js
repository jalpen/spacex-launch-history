import * as React from 'react';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import { func, string, array } from 'prop-types';

import Card from './Card';

const CardContainerBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  let NUM_OF_RECORDS = props.data.length;
  let LIMIT = 6;
  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const currentData = props.data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );

  return (
    <>
      <CardContainerBlock>
        {currentData.map((item, index) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </CardContainerBlock>
      <div className="pagination-wrapper">
        <Pagination
          totalRecords={NUM_OF_RECORDS}
          pageLimit={LIMIT}
          pageNeighbours={2}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

CardContainer.propTypes = {
  data: array.isRequired,
};

export default CardContainer;
