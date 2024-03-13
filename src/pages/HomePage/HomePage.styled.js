import styled from "styled-components";
import BubblesMob from '../../assets/MobileBg/HomepageBubblesMob.webp';
import BottleBg from '../../assets/MobileBg/HomePageBottleBg.webp';
import BubblesTab from '../../assets/TabletBg/HomePageBgTab.webp';
import BubblesDesk from '../../assets/DesktopBg/HomePageBg.webp';

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
background-image: url(${BubblesMob}), url(${BottleBg});
background-position: center;
background-repeat: no-repeat;
background-size: contain;

@media screen and (min-width: 767px) and (max-width: 1440px) {
    background-image: url(${BubblesTab});
}

@media screen and (min-width: 1440px) {
    background-image: url(${BubblesDesk});
}
`

export default StyledWrapperDiv