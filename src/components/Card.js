import * as React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const CardBlock = styled.div`
  width: 270px;
  height: 180px;
  box-shadow: 0 8px 16px -8px rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1rem;
  font-size: 0.8rem;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const CardSummary = styled.div`
  position: absolute;
  width: 90px;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 40%;
  }
`;

const CardDetails = styled.div`
  width: 180px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #d0bdbd;
  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;
//background: rgba(222, 104, 94, 0.6);

const CardImage = styled.img`
  width: 80px;
`;

const CardHeader = styled.div`
  font-size: 1rem;
  padding: 1rem 0 0rem 0rem;
  border-bottom: 1px solid rgb(255 255 255 / 12%);
`;

const CardDescription = styled.div`
  padding: 0.5rem 0;
`;

const Article = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  text-decoration: none;
`;

const SummaryLabel = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  background: rgb(0 0 0 / 10%);
  border-radius: 9px;
  margin-bottom: 0.5rem;
`;

const Card = (props) => {
  var data = props.data;
  return (
    <>
      <CardBlock>
        <CardSummary>
          <SummaryLabel>{data.date}</SummaryLabel>
          <CardImage
            width={'80px'}
            height={'50px'}
            alt={data.name}
            src={data.image}
          ></CardImage>
          <div className={data.className}>{data.success}</div>
        </CardSummary>
        <CardDetails>
          <CardHeader>{data.name}</CardHeader>
          <CardDescription>{data.details}</CardDescription>
          <Article href={data.link} target="about:blank">
            Read more
          </Article>
        </CardDetails>
      </CardBlock>
    </>
  );
};

Card.propTypes = {
  name: string.isRequired,
  image: func.isRequired,
  details: string.isRequired,
  links: string.isRequired,
};

export default Card;
