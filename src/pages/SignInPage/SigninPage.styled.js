import styled from 'styled-components';
import BubblesMob from '../../assets/MobileBg/HomepageBubblesMob.webp';
import BubblesTab from '../../assets/TabletBg/BubblesBgTab.webp';
import BubblesDesk from '../../assets/DesktopBg/Bubbles.webp';
import BubblesMobRetina from '../../assets/MobileBg/HomepageBubblesMob@retina.webp';
import BubblesTabRetina from '../../assets/TabletBg/BubblesBgTab@retina.webp';
import BubblesDeskRetina from '../../assets/DesktopBg/Bubbles@retina.webp';

export const BackgroundWrapper = styled.div`
  height: calc(100vh - 48px);
  background-image: url(${BubblesMob});
  background-size: cover;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  @media screen and (min-width: 767px) and (max-width: 1439px) {
    background-image: url(${BubblesTab});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${BubblesDesk});
  }
  @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    @media screen and (min-width: 320px) and (max-width: 767px) {
      background-image: url(${BubblesMobRetina});
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
      background-image: url(${BubblesTabRetina});
    }
    @media screen and (min-width: 1440px) {
      background-image: url(${BubblesDeskRetina});
    }
  }
`

export const StyledSection = styled.section`
  height: calc(100vh - 60px);
  position: relative;
  max-width: 280px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 704px;
  }
`;
export const LoginWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 185px;
  }
`;
export const ImgWrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: -1;

  @media only screen and (min-width: 768px) {
    position: absolute;
    right: -5%;
    top: 0;
    z-index: -1;
    margin-top: -105px;
  }
  @media only screen and (min-width: 1440px) {
    position: static;

    margin-left: -262px;
    margin-top: -2px;
    width: 100%;
    height: 100%;
  }
`;

export const ErrorSpan = styled.span`
  position: absolute;
  bottom: -24px;
  color: #ef5050;
  font-size: 14px;
`;
