import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${p => p.theme.bg};
    }
    button, input {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-block: 0;
    }
`;

export default GlobalStyles;