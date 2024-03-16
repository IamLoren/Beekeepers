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

export const StyledBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const AvatarWrapper = styled.div`
  margin-right: 4px;
  width: 28px;
  height: 28px;
  overflow: clip;
  border-radius: 50px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  color: #407bff;
  margin: 2px 0 0;
`;

export const StyledSvg = styled.svg`
  stroke: #407bff;
  fill: #407bff;
`;
