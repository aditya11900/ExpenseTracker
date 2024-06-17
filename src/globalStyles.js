import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: linear-gradient(135deg, #f6d365, #fda085);
    color: #333;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
