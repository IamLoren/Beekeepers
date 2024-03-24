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
p,
.react-calendar__month-view__days__day  {
  margin: 0;
  padding: 0;
}

.react-calendar__month-view__days__day  {
  margin: 0 !important;
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
.react-calendar__month-view__days  {
  display: grid !important;
  grid-template-columns: repeat(5, 1fr) !important;
  grid-template-rows: repeat(7, 1fr) !important;
  column-gap: 22px;
  row-gap: 20px;
}

body{
  font-family: 'Roboto Regular';
  font-size: 18px;
  min-height: 100vh;
  color: var(--primary-text);
  background-color: var(--bcgclr);
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
  .react-calendar__month-view__days  {
    display: grid !important;
    grid-template-columns: repeat(10, 1fr) !important;
    grid-template-rows: repeat(4, 1fr) !important;
    column-gap: 22px;
    row-gap: 20px;
  }
}

@media screen and (min-width: 1440px) {
  body {
    height: 100vh;
    max-height: 100vh;
  }
  .react-calendar__month-view__days  {
    display: grid !important;
    grid-template-columns: repeat(10, 1fr) !important;
    grid-template-rows: repeat(4, 1fr) !important;
    column-gap: 22px;
    row-gap: 20px;
  }
}
  .react-calendar {
    width: 100%;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 22px;
  }

  .react-calendar__navigation__label {
    width: 150px;
    flex-grow: 0 !important;
    border: none !important;
    background-color: transparent;
    color: var(--secondary-text);
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none !important;
  }

  .react-calendar__navigation__next-button,
  .react-calendar__navigation__prev-button {
    border: none;
    background-color: transparent;
    color: var(--secondary-text);
  }

  .react-calendar__month-view__weekdays {
    display: none !important; 
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

 .blue-toast .Toastify__close-button {
    color: var(--secondary-text) !important;
  }
`;

export default Global;
