import styled from 'styled-components';
import { MobileTimePicker } from '@mui/x-date-pickers';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: var(--white-text);
  border-radius: 10px;

  padding: 24px 12px;

  position: relative;

  &.delete-modal {
    padding: 32px 24px;
  }

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const TitleModal = styled.h2`
  font-family: 'Roboto Medium';
  font-size: 26px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 42px;
  right: 30px;

  padding: 0;

  background-color: transparent;
  border: none;

  @media only screen and (max-width: 767px) {
    .edit-close {
      top: 30px;
      right: 18px;
    }
  }
`;

export const ContentItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  width: fit-content;

  background-color: var(--card-bg-color);
  border-radius: 10px;

  padding: 8px 24px;

  @media only screen and (min-width: 768px) {
    svg {
      width: 23px;
      height: 30px;
    }
  }
`;

export const AmountText = styled.p`
  color: var(--secondary-text);
  font-size: 18px;
  margin: 0;
  width: 60px;
`;

export const TimeText = styled.p`
  color: var(--primary-text);
  font-size: 12px;
  margin: 0;
  width: 84px;

  @media only screen and (min-width: 768px) {
    width: 82px;
  }
`;

export const SubtitleModal = styled.p`
  font-family: 'Roboto Medium';
  font-size: 18px;

  padding-bottom: 16px;

  &.delete-subtitle {
    padding: 0;
  }
`;

export const TextModal = styled.p`
  font-size: 16px;

  padding-bottom: 12px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  button {
    display: flex;
    align-items: center;
    stroke: var(--secondary-text);
    fill: var(--secondary-text);
    background-color: transparent;
    border: 1px solid var(--percentage-text);
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);

    &:hover {
      box-shadow: 0 4px 10px 0 rgba(64, 123, 255, 0.54);
    }
  }

  span {
    font-family: 'Roboto Bold';
    font-size: 18px;
    color: var(--secondary-text);
    background-color: var(--accent-bg-color);
    border-radius: 40px;
    padding: 6px 10px;
  }
`;

export const TimeSelect = styled.select`
  width: 100%;
  color: var(--secondary-text);
  font-size: 16px;
  background-color: transparent;
  border: 1px solid var(--accent-bg-color);
  border-radius: 10px;
  padding: 12px 10px;
  appearance: none;

  &:valid {
    border-color: var(--secondary-text);
    outline: none;
  }
`;

export const StyledTimePicker = styled(MobileTimePicker)`
  width: 100%;

  fieldset {
    width: 100%;
    border: none;
    border-radius: 10px;
  }
  div {
    padding: 0;
  }
  input {
    width: 100%;
    color: var(--secondary-text);
    font-size: 16px;
    font-family: 'Roboto Regular';
    background-color: transparent;
    border: 1px solid var(--accent-bg-color);
    border-radius: 10px;
    padding: 12px 10px;
    appearance: none;

    &:valid {
      border-color: var(--secondary-text);
      outline: none;
    }
  }
`;

export const AmountInput = styled.input`
  width: 100%;
  color: var(--secondary-text);
  font-size: 16px;
  background-color: transparent;
  border: 1px solid var(--accent-bg-color);
  border-radius: 10px;
  padding: 12px 10px;

  &:valid {
    outline: none;
  }
`;

export const ResultSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
  }
`;

export const AmountResult = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto Bold';
  font-size: 18px;
  color: var(--secondary-text);
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  color: var(--white-text);
  background-color: var(--secondary-text);
  border: none;
  border-radius: 10px;
  padding: 8px 0;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  &:disabled {
    background-color: var(--percentage-text);
    box-shadow: none;
    cursor: default;
  }

  &:disabled:hover {
    box-shadow: none;
  }

  @media only screen and (min-width: 768px) {
    padding: 10px 0;
    width: 160px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 8px;

  font-family: 'Roboto Medium';
  font-size: 16px;

  color: var(--white-text);
  background-color: var(--error-text);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  &.cancel-btn {
    color: var(--secondary-text);
    background-color: var(--accent-bg-color);
    box-shadow: none;
  }

  @media only screen and (min-width: 768px) {
    width: 160px;

    font-size: 18px;
  }
`;
