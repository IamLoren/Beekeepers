import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import WelcomePageBg from '../../assets/DesktopBg/WelcomePageBg.webp'
// import WelcomeBgTab from '../../assets/TabletBg/WelcomeBgTab.webp'
// import WelcomeBgMob from '../../assets/MobileBg/WelcomeBgMob.webp'




export const StyledFullPage = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  @media only screen and (min-width: 768px) {
    gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 81px;
    justify-content: center;
    align-items: flex-end;
    padding-top: 80px;
  }
`;
export const StyledTitle1 = styled.h1`
  width: 246px;
  font-weight: 700;
  font-size: 28px;
  padding-top: 24px;
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;
export const StyledTitle2 = styled.h2`
  width: 220px;
  font-weight: 400;
  font-size: 24px;

  padding-bottom: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;
export const StyledLeftTitle3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 12px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const WelcomeLiSpan = styled.span`
  font-size: 16px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const StyledLeftList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 24px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const StyledLeftItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 100%;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;

  font-weight: 500;
  font-size: 16px;

  text-align: center;
  color: #fff;
  border: none;
`;

export const StyledRightItem = styled.li`
  position: relative;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #407bff;
  }
`;

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

export const StyledRightWrapper = styled.div`
  border-radius: 10px;
  padding: 32px 24px;

  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: #ecf2ff;
  max-width: 380px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    max-width: 494px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
export const WelcomeNavLink = styled(NavLink)`
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 9px;
  width: 100%;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;

  font-weight: 500;
  font-size: 16px;

  text-align: center;
  color: #fff;
  border: none;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
    padding: 13px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;

export const TryTrackerDivContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }
`;

export const StyledRightTitle3 = styled.h3`
  padding-bottom: 12px;

  font-weight: 500;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
  }
`;
export const StyledRightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 20px;
  @media only screen and (min-width: 768px) {
  }
`;
export const TabletWoterDivImg = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }

  position: fixed;
  left: 58%;
  top: 48%;
  z-index: -1;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const DesctopWoterDivImg = styled.div`
  @media only screen and (max-width: 1439px) {
    display: none;
  }

  position: absolute;
  left: 71%;
  top: 61%;
  z-index: -1;
`;