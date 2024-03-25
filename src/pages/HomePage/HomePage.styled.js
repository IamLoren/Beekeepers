import styled from 'styled-components';
import BubblesMob from '../../assets/MobileBg/HomepageBubblesMob.webp';
import BubblesTab from '../../assets/TabletBg/BubblesBgTab.webp';
import BubblesDesk from '../../assets/DesktopBg/Bubbles.webp';
import BubblesMobRetina from '../../assets/MobileBg/HomepageBubblesMob@retina.webp';
import BubblesTabRetina from '../../assets/TabletBg/BubblesBgTab@retina.webp';
import BubblesDeskRetina from '../../assets/DesktopBg/Bubbles@retina.webp';
import '../../css/variables.css';

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const StyledWrapperDiv = styled.div`
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
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding: 24px 8px;
  margin-bottom: 40px;

  background-color: var(--card-bg-color);
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    theme === 'dark' ? '0 0 10px #eee' : '0px 4px 14px #407cff62'};

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const ActiveContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
  }

  @media screen and (min-width: 1440px) {
    height: 510px;
    width: 592px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  align-self: center;
  gap: 5px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    flex-direction: row;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--btn-bg-color);
  border: 1px solid var(--percentage-text) !important;
  padding: 10px;
  text-align: center;
  color: var(--btn-text-color);
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  display: block;

  &:hover,
  &:active {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 76px;
    font-size: 18px;
    padding: 13px;
  }
`;

export default StyledWrapperDiv;
