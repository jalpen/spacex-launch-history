import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import api from '../config/api';
import Loader from '../components/Loader';
import CardContainer from '../components/CardContainer';
import TextCenter from '../components/TextCenter';
import Utility from '../helpers/Utility';

const PageHeader = styled.span`
  background: rgb(0 0 0 / 20%);
  padding: 5px 10px;
  border-radius: 9px;
`;

const Launches = () => {
  const [records, setRecords] = useState({ records: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(api.urlContext + 'launches');
      //Beutify data
      const records = response.data.slice(0, 60).map((element, index) => {
        element.className = element.success
          ? 'button-success'
          : 'button-danger';
        element.success = element.success ? 'Success' : 'Failure';
        element.image = element.links.patch.small;
        if (element.details)
          element.details = element.details.slice(0, 80) + '...';
        if (element.date_unix)
          element.date = Utility.dateUtil.unixTimeToDate(element.date_unix);
        element.link = element.links.article;
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
        <PageHeader>Launches History</PageHeader>
      </TextCenter>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <CardContainer
          data={records.launches}
          type={'Launches'}
        ></CardContainer>
      )}
    </>
  );
};

export default Launches;
