import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import api from '../config/api';
import Loader from '../components/Loader';
import CardContainer from '../components/CardContainer';
import TextCenter from '../components/TextCenter';

const PageHeader = styled.span`
  background: rgb(0 0 0 / 20%);
  padding: 5px 10px;
  border-radius: 9px;
`;

const LaunchPads = () => {
  const [records, setRecords] = useState({ records: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(api.urlContext + 'landpads');
      //Beautify data
      const records = response.data.slice(0, 60).map((element, index) => {
        element.success = element.status === 'active' ? 'Active' : 'Retired';
        element.className =
          element.status === 'active' ? 'button-success' : 'button-danger';
        if (element.details)
          element.details = element.details.slice(0, 60) + '...';
        if (element.region) element.date = element.region;
        element.image = element.images.large[0];
        element.link = element.wikipedia;
        return element;
      });
      setRecords({ launches: records });
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <>
      <TextCenter>
        <PageHeader>Launch Pads</PageHeader>
      </TextCenter>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <CardContainer
          data={records.launches}
          type={'LaunchPads'}
        ></CardContainer>
      )}
    </>
  );
};

export default LaunchPads;
