import * as React from 'react';
import styled from 'styled-components';

export const WrapperBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background-color: rgb(255 0 0 / 10%);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 600px) {
    width: 100%;
    overflow: auto;
  }
`;
//background-color: rgb(56 52 52 / 10%);
//background-color: rgba(255, 0, 0, 0.1);
//background-color: rgb(255 123 123 / 10%)

export const AppContainer = styled.div``;

const Wrapper = (props) => (
  <WrapperBlock>
    <AppContainer>{props.children}</AppContainer>
  </WrapperBlock>
);

export default Wrapper;
