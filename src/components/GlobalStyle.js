import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1400px) {
            font-size: 80%;
        }
    }

    body {
        /* background: #1b1b1b; */
        background: #F3F3F3;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        border: 1px solid #23d997;
        background: transparent;
        color: black;
        transition: all 0.5s ease;
        padding: 1rem 3rem;
        border-radius: 30px;
        outline: none;
        font-family: 'Inter', sans-serif;
        &:hover {
            background: #23d997;
            color: white;
        }
        @media (max-width: 430px) {
            width: 180px;
         }
    }

    h2 {
            font-weight: lighter;
            font-size: 3rem;
            color: black;
        }

    h3 {
            color: black;
        }

    h4 {
        font-weight: bold;
        font-size: 1.7rem;
        color: black;
    }

    span {
        font-weight: bold;
        color:  #23d997;
    }

    a {
        font-size: 1.1.rem;
    }

     p {
            padding: 3rem 0rem;
            /* color: #ccc; */
            color: black;
            font-size: 1rem;
            line-height: 150%;
        }
`;

export default GlobalStyle;
