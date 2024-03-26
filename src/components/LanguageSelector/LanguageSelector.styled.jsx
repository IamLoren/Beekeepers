import styled from 'styled-components';

export const LanguageSelectorWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  z-index: 1000;

  button {
    font-size: 16px;
    line-height: 1.25;
    color: var(--btn-text-color);
    background-color: var(--btn-bg-color);
    border: 1px solid var(--percentage-text);
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    border-radius: 10px;
    width: 28px;
    height: 28px;
    padding: 0;
    text-transform: uppercase;
    cursor: pointer;

    &:hover,
    &:active {
      box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
    }
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
