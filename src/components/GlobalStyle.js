import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    font-family: Roboto;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;
