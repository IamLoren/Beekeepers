import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid var(--percentage-text);
  background: var(--white-text);
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  padding: 8px 15px;
  height: 74px;
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media (min-width: 768px) {
    width: 156px;
    height: 76px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  font-family: 'Roboto Medium';
  font-size: 18px;
  line-height: 1.3;
  color: var(--primary-text);
`;

export const NormaText = styled.h2`
  font-family: 'Roboto Bold';
  font-size: 22px;
  line-height: 1;
  color: var(--secondary-text);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    font-size: 20px;
    text-shadow: none;
  }
`;

export const Btn = styled.button`
  padding: 0;
  font-size: 16px;
  line-height: 1.25;
  color: #8baeff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white-text);
  border: none;
  outline: none;
  transition: color cubic-bezier(0.1, 0.7, 1, 0.1);

  &:hover {
    color: var(--accent-text);
  }

  @media (min-width: 768px) {
    text-shadow: none;
  }
`;

export const NormaBtnWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;
