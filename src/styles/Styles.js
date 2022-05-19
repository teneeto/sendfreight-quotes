import {createGlobalStyle} from 'styled-components';

import GilroyLight from '../assets/fonts/Gilroy/Gilroy-Light.otf';
import GilroyExtraBold from '../assets/fonts/Gilroy/Gilroy-ExtraBold.otf';
import InterRegular from '../assets/fonts/Inter/Inter-Regular.otf';
import InterMedium from '../assets/fonts/Inter/Inter-Medium.otf';
import InterSemiBold from '../assets/fonts/Inter/Inter-SemiBold.otf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy-Light';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Gilroy-Light'),local('Gilroy Light'),
        url(${GilroyLight}) format('opentype');
  }
  @font-face {
    font-family: 'Gilroy-ExtraBold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Gilroy-ExtraBold'),local('Gilroy ExtraBold'),
        url(${GilroyExtraBold}) format('opentype');
  }
  @font-face {
    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Inter Regular'),local('Inter-Regular'),
        url(${InterRegular}) format('opentype');
  }
  @font-face {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Inter Medium'),local('Inter-Medium'),
        url(${InterMedium}) format('opentype');
  }
  @font-face {
    font-family: 'Inter-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Circular SemiBold'),local('Circular-SemiBold'),
        url(${InterSemiBold}) format('opentype');
  }
  
  html, body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vh;
    max-height: 100vh;
    max-width: 100vh;
  }

  body {
    font-family: ${({theme}) => theme.fonts.inter};
    height: 100vh;
    width: 100vh;
    max-height: 100vh;
    max-width: 100vh;

  }

  p, h1, h2, h3, span, div, ul, li{
    padding: 0;
    margin: 0;
  }
`;
