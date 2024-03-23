import styled from "styled-components";
import '../../css/variables.css';

export const StyledGreeting = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 100;
width: 99vw;
height: 98vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100px;
background-color: var(--greeting-bg-color);
`

export const StyledGreetingWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: center;
width: 20%;

`

export const StyledGreetingTitle = styled.h1`
font-size: 48px;
color: var(--secondary-text);
`

export const StyledGreetingText = styled.h2`
font-size: 48px;
color: var(--secondary-text);
`