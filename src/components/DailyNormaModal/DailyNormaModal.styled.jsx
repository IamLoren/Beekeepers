import { FormControlLabel, RadioGroup } from '@mui/material';
import styled from 'styled-components';

export const DailyNormaModalContainer = styled.div`
  padding: 24px 12px;
  width: 280px;
  @media (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 592px;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 26px;
  line-height: 1.2;
  margin-bottom: 24px;
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
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  && {
    margin-bottom: 16px;
  }
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    & .MuiSvgIcon-root {
      font-size: 20px;
    }
    & .MuiFormControlLabel-label {
      font-size: 16px;
      line-height: 1.25;
      margin-right: 10px;
    }
    & .MuiRadio-colorPrimary {
      color: var(--secondary-text);
    }
    & .MuiRadio-colorPrimary.Mui-checked {
      color: var(--secondary-text);
    }
  }
`;

export const TypeData = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
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
    color: var(--percentage-text);
  }

  ${({ $isError }) =>
    $isError &&
    `border-color:  var(--error-text) !important;
    color: var(--error-text);
    `}
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
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

export const InputErrorWrap = styled.div`
  position: relative;
`;

export const Error = styled.div`
  color: var(--error-text);
  position: absolute;
  bottom: -16px;
  font-size: 14px;
  line-height: 1.3;
`;

export const InfoMessage = styled.div`
  color: var(--secondary-text);
  position: absolute;
  bottom: -16px;
  font-size: 14px;
  line-height: 1.3;
`;
