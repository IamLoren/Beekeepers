import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledNotFound = styled.div`
  width: 280px;
  max-width: 100%;
  line-height: 1.4;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;

  @media only screen and (min-width: 768px) {
    width: 720px;
  }

  @media only screen and (min-width: 1440px) {
    width: 920px;
  }
`;

export const StyledError = styled.div`
  position: absolute;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

export const StyledType = styled.h2`
  color: #ececec;
  font-weight: 300;
  font-size: 176px;
  margin: 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 276px;
  }

  @media only screen and (min-width: 1440px) {
    font-weight: 900;
  }
`;

export const StyledTextP = styled.p`
  font-size: 26px;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0px;

  @media only screen and (min-width: 768px) {
    font-size: 46px;
    font-weight: 900;
  }
`;

export const StyledText = styled.p`
  color: #000;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 35px;
  margin-bottom: 15px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  background: #407bff;
  display: inline-block;
  padding: 12px 30px;
  border: 2px solid transparent;
  border-radius: 40px;
  color: #fff;
  font-weight: 200;
  transition: 0.2s all;

  &:hover {
    background-color: #fff;
    border-color: #407bff;
    color: #407bff;
  }
`;
