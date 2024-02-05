import styled from "styled-components";

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: #FFF;
    font-size: 16px;
  }

  *{
    margin: 0;
    padding: 0;
    font-family: "Fira Sans", sans-serif;
  }
  
  button{
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: none;
  }

  :root{
    --dark-gray: #444;
    --darkest-gray: #111;
  }

  @keyframes updatingMotion{
    0%{
      transform: rotate(0deg)
    }
    100%{
      transform: rotate(180deg);
    }
  }

  @font-face {
    font-family: "Fira Sans";
    src: url("/fonts/FiraSans-Regular.ttf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url("/fonts/FiraSans-SemiBold.ttf");
    font-weight: 600;
  }
`

export const MainStyle = styled.div`
  display: block;
  min-height: 100vh;
  background: linear-gradient(320deg, var(--dark-gray) 0%, #000 100%);
`;

