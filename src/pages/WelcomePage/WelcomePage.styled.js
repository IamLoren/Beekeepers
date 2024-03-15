import styled from "styled-components";

export const StyledFullPage = styled.div`
display: flex;
align-items: center;
justify-content: center;

background-repeat: no-repeat;
background-position:bottom -75px left -916px, bottom right -1650px;
background-size:3271px 1134px, 2725px 658px;

@media only screen and (min-width: 768px) {
    justify-content: space-between;

    background-position: bottom;
    background-size: 100%;
}

@media only screen and (min-width: 1440px) {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;


    background-repeat: no-repeat;
    background-position: bottom;
}

`

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin:1rem 1.25rem 2.5rem 1.25rem;
  @media only screen and (min-width: 768px) {
    margin: 1.5rem 2rem;
    align-items: flex-start;
}
@media only screen and (min-width: 1440px) {
  flex-direction: row;
  margin: 4.2rem 6.5rem;
  gap: 5rem;
   }

`

export const StyledLeftWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;

`

export const StyledTitle1 = styled.h1`

margin: 0;
@media only screen and (min-width: 768px) {
  font-size: 2.25rem;
  line-height: 1.16667;
  }
@media only screen and (min-width: 1440px) {
  line-height: 1.16667;
  }
`

export const StyledTitle2 = styled.h2`

font-weight: 400;
line-height: 1.25;
margin: 1rem 0;
@media only screen and (min-width: 768px) {
    letter-spacing: 1px;
}

`
export const StyledLeftTitle3 = styled.h3`
font-size: 18px;
line-height: 1.11111;
@media only screen and (min-width: 1440px) {
  margin-top: .5rem;

`

export const StyledLeftList = styled.ul`
margin: 0;
padding: 0;
text-align: left;
@media only screen and (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
`

export const StyledLeftItem = styled.li`
display: flex;
  align-items: center;
  margin-top: 1rem;
  @media only screen and (min-width: 768px) {
    min-width: 224px;
    gap: 1rem;
  }
  @media only screen and (min-width: 1440px) {
    gap:.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`

export const StyledSvg = styled.svg`
width: 32px;
height: 32px;
fill: #fffff;
display: inline - block;
margin-right: 5px;
@media only screen and (min-width: 768px) {
  width: 40px;
height: 40px;
  }
`

export const StyledButton = styled.button`

border-radius: 10px;
border: none;
padding: .5rem;
margin-top: 1.5rem;
margin-bottom: 2.5rem;
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
background: var(--blue);
font-weight: 500;
font-size: 18px;
line-height: 1.33333;
color: var(--white);
width: 100%;
@media only screen and (min-width: 768px) {
  width: 50%;
}
@media only screen and (min-width: 1440px) {
  width: 24rem;
  margin-top: .5rem;
}

`

export const StyledRightWrapper = styled.div`
border-radius: 10px;
box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
background: var(--secondary-white);
text-align: left;
list-style-position: inside;
display: flex;
@media only screen and (min-width: 768px) {
  margin-top: 1.25rem;

}

`

export const StyledRightTitle3 = styled.h3`
font-size: 18px;
line-height: 1.11111;
margin: 0 -1rem;
@media only screen and (min-width: 1440px) {
  margin-top: .5rem;
}

`

export const StyledRightList = styled.ul`
padding: 1.5rem 1rem 1.5rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
list-style-position: outside;
@media only screen and (min-width: 768px) {
  padding: 2rem 2.5rem;
}

`

export const StyledRightItem = styled.li`

margin: 1rem 0 0;
line-height: 1.25;
text-indent:-1rem;
&:before{
  content: '';
  display: inline-block;
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  background-color: var(--blue);
  margin-right: 6px;
}

`