import styled from "styled-components";

export const StyledFlexContainer = styled.div`
display: flex;
flex-direction: column;
gap: 40px;

@media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
}

`