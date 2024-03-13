import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledUserAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
`;

export const StyledLink = styled(Link)`
  color: var(--secondary-text);
`;

export const StyledSvg = styled.svg`
  fill: transparent;
  stroke: black;
`;
