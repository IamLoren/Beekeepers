import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;

  background-color: var(--white-text);
  border-radius: 10px;
  &.delete-modal {
    padding: 32px 24px;
    position: relative;
  }
  @media only screen and (min-width: 768px) {
    width: 592px;
  }
`;

export const StyledTitle = styled.h2`
  font-family: 'Roboto Medium', sans-serif;
  font-size: 26px;
`;

export const StyledText = styled.p`
  font-family: 'Roboto Medium', sans-serif;
  font-size: 18px;

  padding-bottom: 16px;

  &.delete-subtitle {
    padding: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
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
