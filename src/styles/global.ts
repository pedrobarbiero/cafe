import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors['base-input']};
    }

    body {
        background: ${(props) => props.theme.colors.background}; 
        color: ${(props) => props.theme.colors['base-label']};
        --webkit-font-smoothing: antialiased;
    }

    h1 {
        color: ${(props) => props.theme.colors['base-title']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        line-height: 130%;
    }

    h2 {
        color: ${(props) => props.theme.colors['base-subtitle']};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
