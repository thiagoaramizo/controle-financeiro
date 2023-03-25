import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        line-height: 1;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme['gray-800']};
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-100']};
    }
`
