import { Routes, Route } from 'react-router-dom';

import LaunchPads from '../views/LaunchPads';
import Launches from '../views/Launches';
import styled from 'styled-components';

const ContainerBlock = styled.div`
  min-height: 480px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

function Container() {
  return (
    <ContainerBlock className="block">
      <Routes>
        <Route exact path="/" element={<Launches />}></Route>
        <Route exact path="/launchpads" element={<LaunchPads />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
      </Routes>
    </ContainerBlock>
  );
}

export default Container;
