import styled, { css } from 'styled-components';
import { FormControlLabel, RadioGroup } from '@mui/material';

export const SettingContainer = styled.div`
  padding: 32px 12px;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }

  @media (min-width: 1440px) {
    width: 1008px;
  }

  h1 {
    font-family: 'Roboto Medium';
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    height: 404px;
  }
`;

export const MainLabelText = styled.label`
  font-size: 18px;
  font-family: 'Roboto Medium';
  line-height: 1.11;
  color: var(--primary-text);
  margin-top: ${(props) =>
    props.htmlFor === 'gender' ||
    props.htmlFor === 'name' ||
    props.htmlFor === 'photo'
      ? '0px'
      : '24px'};
  margin-bottom: ${(props) =>
    props.htmlFor === 'name' ||
    props.htmlFor === 'photo' ||
    props.htmlFor === 'email'
      ? '8px'
      : '12px'};
  ${(props) =>
    props.htmlFor === 'password' &&
    css`
      margin-bottom: 0px;
    `}

  @media (min-width: 1440px) {
    ${(props) =>
      props.htmlFor === 'password' &&
      css`
        margin-top: 0px;
      `}
  }
`;

export const LabelText = styled.label`
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-text);
  margin-top: 12px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 392px;
  }

  :first-child {
    margin-top: 8px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid var(--accent-bg-color);
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  outline: none;
  color: var(--secondary-text);
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    color: var(--secondary-text);
  }

  &[type='password'] {
    &::placeholder {
      color: var(--percentage-text);
    }
  }

  @media (min-width: 768px) {
    width: 392px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 222px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const UploadBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: transparent;
  width: 134px;
  height: 18px;
  font-size: 14px;
  line-height: 1.29;
  color: var(--secondary-text);
  padding-left: 8px;

  svg {
    stroke: var(--secondary-text);
    width: 14px;
    height: 14px;
  }
`;

export const RadioGroupWrap = styled(RadioGroup)`
  column-gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    margin-bottom: 34px;
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
    }
    & .MuiRadio-colorPrimary {
      color: var(--secondary-text);
    }
    & .MuiRadio-colorPrimary.Mui-checked {
      color: var(--secondary-text);
    }
  }
`;

export const SaveBtn = styled.button`
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
  }

  &:active {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
    width: 160px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-wrap: wrap;
    height: 272px;
    width: 272px;
    column-gap: 24px;
  }
`;

export const EyePassBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 37px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  svg {
    stroke: var(--secondary-text);
  }
`;
