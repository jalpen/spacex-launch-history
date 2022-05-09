import * as React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  display: block;
  text-align: center;
`;

const Footer = () => {
  return (
    <>
      <FooterBlock className="footer block">
        Data fetched from open-source REST API by{' '}
        <a href="https://github.com/r-spacex/SpaceX-API">SpaceX-API</a>
      </FooterBlock>
    </>
  );
};

export default Footer;
