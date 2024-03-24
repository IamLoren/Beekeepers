import styled from 'styled-components';

export const StyledSection = styled.section`
  height: calc(100vh - 60px);
  position: relative;
  max-width: 280px;
  margin: 0 auto;

  @media only screen and (min-width: 768px){
    max-width: 704px;
  }
`;
export const LoginWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 185px;
  }
`;
export const ImgWrapper = styled.div`
  text-align: center;

  // img{
  //   margin: -10px auto;
  // }

  @media only screen and (min-width: 768px) {
    position: absolute;
    right: -5%;
    top: 0;
    z-index: -1;
    margin-top: -105px;
  }
  @media only screen and (min-width: 1440px) {
    position: static;

    margin-left: -262px;
    margin-top: -2px;
    width: 100%;
    height: 100%;
  }
`;

export const ErrorSpan = styled.span`
  position: absolute;
  bottom: -24px;
  color: #ef5050;
  font-size: 14px;
`;
