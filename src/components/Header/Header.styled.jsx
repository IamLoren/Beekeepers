import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 8px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  @media only screen and (min-width: 768px) {
    padding: 16px 32px 0;
  }

  @media only screen and (min-width: 1440px) {
    padding: 12px 112px 0;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
