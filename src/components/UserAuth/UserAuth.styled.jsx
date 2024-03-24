import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledUserAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyledSpan = styled.span`
  color: var(--secondary-text);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  &:hover {
    color: var(--accent-text);
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const StyledSvg = styled.svg`
  fill: transparent;
  stroke: var(--primary-text);
`;
