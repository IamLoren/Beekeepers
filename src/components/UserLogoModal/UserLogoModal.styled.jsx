import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: #fff;
  position: absolute;
  margin: 8px -90px;

  /* @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1440px) {
  } */
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSvg = styled.svg`
  fill: transparent;
  stroke: #407bff;
  font-weight: 400;
  font-size: 16px;
  stroke-width: 1px;
`;

export const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #407bff;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
