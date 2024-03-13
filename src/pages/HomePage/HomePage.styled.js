import styled from "styled-components";
import BubblesMob from '../../assets/MobileBg/HomepageBubblesMob.webp';
import BubblesTab from '../../assets/TabletBg/BubblesBgTab.webp';
import BubblesDesk from '../../assets/DesktopBg/Bubbles.webp';

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
height: calc(100vh - 48px);
background-image: url(${BubblesMob});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

@media screen and (min-width: 767px) and (max-width: 1439px) {
    background-image: url(${BubblesTab});
}

@media screen and (min-width: 1440px) {
    background-image: url(${BubblesDesk});
}
`

export default StyledWrapperDiv