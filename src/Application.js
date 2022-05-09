import { BrowserRouter } from 'react-router-dom';

import Wrapper from './layouts/Wrapper';
import Header from './layouts/Header';
import Container from './layouts/Container';
import Footer from './layouts/Footer';

function Application() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Application;
