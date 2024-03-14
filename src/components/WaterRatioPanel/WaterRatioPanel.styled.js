import styled from 'styled-components';

const StyledRatioSectionContainer = styled.div`
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    align-items: center;
    gap: 22px;
  }

  @media only screen and (min-width: 1440px) {
    width: 592px;
    gap: 23px;
  }
`;

const StyledToday = styled.p`
  font-family: 'Roboto Regular', sans-serif;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--secondary-text);
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const StyledProgressBarContainer = styled.div`
  margin-bottom: 16px;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 356px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1440px) {
    width: 391px;
  }
`;

const StyledProgressBar = styled.div`
  width: 256px;
  height: 10px;
  background-color: var(--accent-bg-color);
  border-radius: 8px;
  margin: 0 auto;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 325px;
  }

  @media only screen and (min-width: 1440px) {
    width: 360px;
  }
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--percentage-text);
  border-radius: 8px 0 0 8px;
  transition: width 0.5s ease-in-out;
  width: ${(props) => props.$progress}%;
`;

const CircleIndicator = styled.div`
  width: 17px;
  height: 17px;
  background-color: var(--white-text);
  border: 1px solid var(--secondary-text);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${(props) => props.$progress}%;
  transform: translate(-50%, -50%);
`;

const MiddleIndicator = styled.span`
  padding-left: 7px;
`;

const StyledProgressNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  > span {
    margin-right: -2px;
    margin-left: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7px;

    font-family: 'Roboto Regular', sans-serif;
    font-size: 12px;
    line-height: 1.33333;
    text-align: center;
    color: var(--secondary-text);

    &::before {
      content: '';
      position: absolute;
      top: -15px;
      width: 1px;
      height: 10px;
      background-color: var(--accent-bg-color);
    }
  }
`;

const StyledAddBtn = styled.button`
  width: 280px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--secondary-text);
  border: none;
  border-radius: 10px;
  padding: 6px 76px;
  cursor: pointer;

  font-family: 'Roboto Medium', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--white-text);

  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    padding: 10px 104px;

    font-size: 18px;
    line-height: 1.33333;
  }

  @media only screen and (min-width: 1440px) {
    width: 178px;
    padding: 10px 30px;
  }
`;

export {
  StyledRatioSectionContainer,
  StyledProgressBarContainer,
  StyledToday,
  StyledProgressNumbers,
  StyledAddBtn,
  StyledProgressBar,
  ProgressFill,
  CircleIndicator,
  MiddleIndicator,
};
