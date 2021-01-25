import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { scrollBar } from './Mixins';

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {  
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    outline:none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;  
    :focus {
      outline-style: auto;
      outline-color: ${colors.Black     }; 
    }
  }  

  input {
    :focus {
      outline-style: auto;
      outline-color: ${colors.Black}; 
    }
  }
  html {
    font-size: 62.5%; 
  }
  
  ul {
    ${scrollBar};
    list-style: none; 
  }

  body {
    width:100%;
    height:100vh;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    overflow-x:hidden;
    position:relative;
    margin:0;
    padding:0;
    outline:none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

