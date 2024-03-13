import { createGlobalStyle } from 'styled-components';
import bgTab from '../assets/BG-tab.webp';
// import bgMob from '../img/Mobile/statistics-bg-mob.webp';
// import BgMobRetina from  '../img/Mobile/statistics-bg-mob@retina.webp'
import './variables.css';

export const Global = createGlobalStyle`

* {
    
::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--percentage-text);
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--accent-bg-color);
  }
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

body{
  font-family: 'Roboto Regular';
  font-size: 18px;
  min-height: 100vh;
  color: #000;
  background-image: url(${bgTab});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    background-color: inherit !important;
    color: var(--text-forms);
}

@media screen and (min-width: 767px) and (max-width: 1440px) {
 
}

@media screen and (min-width: 1440px) {
  body {
    max-height: 100vh;
    height: fit-content;
    background-image: url(${bgTab});
    background-position: bottom;
    /* Додаткові стилі для бекграунду на малих екранах */
  }

  @media only screen and (min-width: 1440px) and (min-resolution: 192dpi) {
    body {
       background-image: url(${bgTab};
        background-position: bottom;
    }
  }
`;

export default Global;