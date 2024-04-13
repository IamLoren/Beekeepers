import styled from 'styled-components';

export const StyledRatioSectionContainer = styled.div`
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 704px;
    height: 95px;
    display: flex;
    align-items: center;
    gap: 22px;
  }

  @media only screen and (min-width: 1440px) {
    width: 592px;
    height: auto;
    gap: 23px;
  }
`;

export const StyledToday = styled.p`
  font-family: 'Roboto Regular', sans-serif;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--secondary-text);
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const StyledProgressBarContainer = styled.div`
  height: 85px;
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

export const StyledProgressBar = styled.div`
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

export const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--percentage-text);
  border-radius: 8px 0 0 8px;
  transition: width 0.5s ease-in-out;
  width: ${(props) => props.$progress}%;
`;

export const CircleIndicator = styled.div`
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

export const StyledProgressNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  color: var(--secondary-text);
  font-size: 12px;
  line-height: 1.33333;

  > span {
    margin-right: -2px;
    margin-left: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7px;

    font-family: 'Roboto Regular', sans-serif;

    text-align: center;

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

export const BoldIndicator = styled.span`
  font-size: ${(props) => (props.$isBold ? '16px' : '12px')};
  font-weight: ${(props) => (props.$isBold ? '500' : '400')};
  line-height: ${(props) => (props.$isBold ? '1.25' : '1.33')};
`;

export const MiddleIndicator = styled(BoldIndicator)`
  padding-left: 7px;
`;

export const LastIndicator = styled(BoldIndicator)`
  color: ${(props) =>
    props.$progress > 100 ? '#50C800' : 'var(--secondary-text)'};
`;

export const StyledAddBtn = styled.button`
  width: 280px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--btn-bg-color);
  border: 1px solid var(--percentage-text);
  border-radius: 10px;
  padding: 6px;
  cursor: pointer;

  font-family: 'Roboto Medium', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--btn-text-color);

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: white;
  }

  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    padding: 10px;

    font-size: 18px;
    line-height: 1.33333;
  }

  @media only screen and (min-width: 1440px) {
    width: 178px;
    padding: 10px;
  }
`;
