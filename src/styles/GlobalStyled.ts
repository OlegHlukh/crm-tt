import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;

    &:visited {
      color: white;
    }
  }
`;
