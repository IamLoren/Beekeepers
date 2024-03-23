import styled from 'styled-components';

export const OpenBtn = styled.button`
  background-color: var(--secondary-text);
  border: none;
  padding: 10px;
  border-radius: 50%;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const ChatBotWrapper = styled.div`
  width: fit-content;
  position: sticky;
  left: 10px;
  bottom: 10px;
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 17px;
  right: 17px;
  z-index: 1000;

  background-color: var(--card-bg-color);
  border: 1px solid var(--percentage-text);
  border-radius: 50%;
  padding: 5px;

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 1.5px;
  }
`;
