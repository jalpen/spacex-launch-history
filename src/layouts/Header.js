import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ThemeContainer from '../components/ThemeContainer';
import { VscRocket } from 'react-icons/vsc';
import '../styles/layout.css';

const LogoBlock = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none !important;
`;

//Can be used to hide for mobile devices
const HeaderBlock = styled.div`
  padding-top: 0.6rem;

  @media only screen and (max-width: 600px) {
    .nav {
      display: block;
    }
  }
`;

function Header() {
  return (
    <HeaderBlock className="header block">
      <div className="layout">
        <LogoBlock className="company-title">
          <StyledLink className="flex-center" to="/">
            <VscRocket size={40}></VscRocket>
            <span className="company-title">SpaceX</span>
          </StyledLink>
        </LogoBlock>
        <nav className="nav">
          <ul>
            <li>
              <StyledLink to="/launchpads">Launch Pads</StyledLink>
            </li>
            <li>
              <StyledLink to="/launches">Launches</StyledLink>
            </li>
          </ul>
        </nav>

        <ThemeContainer />
      </div>
    </HeaderBlock>
  );
}

export default Header;
