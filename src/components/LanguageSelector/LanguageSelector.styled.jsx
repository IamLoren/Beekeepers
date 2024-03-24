import styled from 'styled-components';

export const LanguageSelectorWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  z-index: 2000;

  button {
    font-size: 16px;
    line-height: 1.25;
    color: var(--white-text);
    background-color: var(--percentage-text);
    border: 1px solid var(--secondary-text);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    padding: 0;
    text-transform: uppercase;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 100%;
    right: 0%;
    padding: 0;
    margin: 3px 0;
    list-style-type: none;
    border-radius: 10px;
    width: auto;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
    background-color: var(--white-text);
  }

  li {
    padding: 4px;
    cursor: pointer;
  }

  li[disabled] {
    color: var(--percentage-text);
    cursor: not-allowed;
  }
`;
