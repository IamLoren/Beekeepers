import styled from 'styled-components';

export const DailyNormaModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: auto;
  overflow-y: auto;
  z-index: 2000;
  padding: 24px 12px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--white-text);

  @media (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media (min-width: 1440px) {
    width: 592px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const WrapHeaderBtn = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    font-family: 'Roboto-Medium';
    line-height: 1.2;
    margin-bottom: 24px;
  }
`;

export const WrapFormula = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;
  p {
    font-size: 16px;
    line-height: 1.25;
  }
  span {
    color: var(--secondary-text);
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const WrapFormulaExplication = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--secondaryDarkGrey);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 24px;
`;

export const FormulaExplication = styled.p`
  color: #8f8f8f;
  font-size: 12px;
  line-height: 1.35;
  box-sizing: border-box;
  span {
    color: var(--secondary-text);
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Roboto Medium';
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
`;
export const WrapRadioInputs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  position: relative;
  cursor: pointer;
  margin-right: 24px;
`;

export const InputRadio = styled.input`
  cursor: pointer;
`;

export const Span = styled.span`
  margin-left: 8px;
  font-size: 16px;
  line-height: 1.25;
`;

export const TypeData = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  border: 1px solid var(--accent-bg-color);
  border-radius: 6px;
  outline: none;
  color: var(--secondary-text);
  font-size: 16px;
  line-height: 1.25;
  &::placeholder {
    color: var(--secondary-text);
  }
`;

export const WrapAmount = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 24px;
  align-items: center;
  gap: 16px;
`;
export const Data = styled.p`
  width: 190px;
  @media (min-width: 768px) {
    width: 328px;
  }
`;

export const AmountNumber = styled.span`
  font-size: 18px;
  font-family: 'Roboto Bold';
  line-height: 1.3;
  color: var(--secondary-text);
`;
export const BtnSave = styled.button`
  margin-top: 24px;
  border: none;
  width: 100%;
  height: 36px;
  background-color: var(--secondary-text);
  color: var(--white-text);
  font-family: 'Roboto Medium';
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
    width: 160px;
    height: 44px;
    font-size: 18px;
    line-height: 1.3;
  }
`;
