import { createGlobalStyle } from "styled-components"

// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

export const GlobalStyles = createGlobalStyle`
    @font-face {
      src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      font-family: 'Poppins';
      font-weight: 400;
      font-style: normal;
    }
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    /* scroll-snap-type: y proximity; */
    scroll-behavior: smooth !important;
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    background-color: #000;
    color: #fff;
    height: auto;
    scroll-behavior: smooth !important;
  }
  h1, h2, h3, h4, h5, h6 {
    /* font-family: 'FontOver', sans-serif; */
  }
  
  
  a {
    cursor: pointer;
    text-decoration: none;
  }
  ul, ol {
    list-style: none;
  }
  
  input, button {
    border: none;
    outline: none;
    font-family: inherit;
    &:focus {
      outline: none;
    }
  }
  input {
    font-size: 1.8rem;
  }
`
