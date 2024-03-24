import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding: 16px 0 0;
  }

  @media only screen and (min-width: 1440px) {
    padding: 12px 0 0;
  }
`;

export const LngLogoutWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
