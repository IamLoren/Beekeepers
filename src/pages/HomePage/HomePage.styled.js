import styled from "styled-components";
import BubblesMob from '../../assets/MobileBg/HomepageBubblesMob.webp';
import BottleBg from '../../assets/MobileBg/HomePageBottleBg.webp'

export const StyledFlexContainer = styled.div`
display: flex;
flex-direction: column;
gap: 40px;

@media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
}
`

const StyledWrapperDiv = styled.div`
background-image: url(${BubblesMob}), url(${BottleBg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default StyledWrapperDiv