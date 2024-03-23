import styled from 'styled-components';

export const LanguageSelectorWrap = styled.div`
  display: flex;
  gap: 8px;
  button {
    background-color: blue;
    border: none;
    color: black;
    font-size: 16px;
    border-radius: 2px;
    &:disabled {
      background-color: green;
    }
  }
`;
