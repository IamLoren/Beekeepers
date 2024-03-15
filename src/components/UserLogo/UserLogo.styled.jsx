import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  text-align: right;
  color: #2f2f2f;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const StyledImg = styled.img`
  border-radius: 100%;
  width: 28px;
  height: 28px;
`;

export const StyledBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSvg = styled.svg`
  stroke: #407bff;
  fill: #407bff;
`;
