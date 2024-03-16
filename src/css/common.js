import { createGlobalStyle } from 'styled-components';
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
  color: var(--primary-text);
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
    height: 100vh;
    max-height: 100vh;
  }
  }
  .react-calendar {
    width: 100%;
  }
  .react-calendar__month-view__weekdays {
    display: none !important; 
  }
  .react-calendar__month-view__days  {
    display: grid !important;
    grid-template-columns: repeat(10, 1fr) !important;
    grid-template-rows: repeat(4, 1fr) !important;
    column-gap: 22px;
    row-gap: 20px;
  }
   .react-calendar__tile {
      width: 34px !important;
      height: 56px;
      padding: 10px 0 !important;
      border-radius: 50%;
      border: transparent;
      background-color: transparent;
      z-index: 10 !important;
      overflow: visible !important;
  }
  abbr {
    position: relative;
    z-index: 10 !important;
    margin-top: 5px;
  }
`;

export default Global;