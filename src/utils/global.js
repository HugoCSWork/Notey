import { createGlobalStyle } from "styled-components";

/**
 * Creates the global style that will allow the components to be used throughout the project
 */
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
*:focus {
  outline: 0;
  outline: none;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    --color-main: ${({ theme }) => theme.colors.main};
    --color-mainDarker: ${({ theme }) => theme.colors.mainDarker};
    --color-main: ${({ theme }) => theme.colors.main};
    --color-mainDark: ${({ theme }) => theme.colors.mainDark};
    --color-mainLight: ${({ theme }) => theme.colors.mainLight};
    --color-mainLighter: ${({ theme }) => theme.colors.mainLighter};
    --color-text: ${({ theme }) => theme.colors.textColor};
    --color-white: ${({ theme }) => theme.colors.whiteColor};
    --color-errorRed: ${({ theme }) => theme.colors.errorRed};
    --shadow: ${({ theme }) => theme.colors.shadow};


    @media ${({ theme }) => theme.mediaQueries.small} {
      font-size: 60%;
    }

    @media ${({ theme }) => theme.mediaQueries.smallest} {
      font-size: 55%;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  a, button {
    cursor: pointer;
  }

  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`;
