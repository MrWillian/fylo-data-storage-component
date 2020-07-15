import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('images/bg-mobile.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    font-family: 'Raleway', sans-serif;

    @media(min-width: 800px) {
      background-color: var(--very-dark-blue);
      background-image: url('images/bg-desktop.png');
      background-attachment: fixed;
      background-position: center bottom;
      background-size: auto;
    }
  }

  :root {
    --pale-blue: hsl(243, 100%, 93%);
    --grayish-blue: hsl(229, 7%, 55%);
    --dark-blue: hsl(228, 56%, 26%);
    --very-dark-blue: hsl(229, 57%, 11%);
    --gradient: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));

    --white: #FFF;

    --body-copy: 14px;
  }
`;