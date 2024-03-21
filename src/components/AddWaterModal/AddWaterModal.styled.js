import styled from 'styled-components';

export const StyledAddWaterModalContainer = styled.div`
  padding: 24px 12px;

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }

  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const StyledAddWater = styled.h2`
  font-family: 'Roboto Medium', sans-serif;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--primary-text);
  margin-bottom: 24px;
`;

export const StyledModalBoldText = styled.p`
  font-family: 'Roboto Medium', sans-serif;
  font-size: 18px;
  line-height: 1.11111;
  color: var(--primary-text);
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const StyledModalText = styled.p`
  font-family: 'Roboto Regular', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-text);
  margin-bottom: 12px;
`;

export const StyledCounterContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const StyledCounterBtn = styled.button`
  border: 1px solid var(--percentage-text);
  border-radius: 30px;
  padding: 10px;
  width: 44px;
  height: 44px;

  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background: var(--white-text);

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: var(--secondary-text);
    fill: var(--secondary-text);
  }
`;

export const StyledCounterNumber = styled.span`
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  height: 36px;

  background: var(--accent-bg-color);

  margin: 4px 7px;

  font-family: 'Roboto Bold', sans-serif;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: var(--secondary-text);
`;

export const StyledAddModalInput = styled.input`
  border: 1px solid var(--accent-bg-color);
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;

  margin-bottom: 24px;

  font-family: 'Roboto Regular', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  color: var(--secondary-text);

  &:valid {
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const StyledValueAndBtnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
    align-items: center;
  }
`;

export const StyledCounterBottomNumber = styled.span`
  font-family: 'Roboto Bold', sans-serif;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: var(--secondary-text);

  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledSaveBtn = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--secondary-text);

  font-family: 'Roboto Medium', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--white-text);
  border: none;

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media only screen and (min-width: 768px) {
    width: 160px;
  }
`;
