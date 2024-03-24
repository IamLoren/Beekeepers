import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    padding: 16px 0 0;
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 12px 0 0;
    margin-bottom: 22px;
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
