import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background.x600};
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        position: relative;
    }

    #root {
        width: 100%;
        min-height: 100vh;
        position: relative;
    }
`;
