import { NavLink } from "react-router-dom"
import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 66px;
`;
export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormHeading = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`;
export const FormInput = styled.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid blue;
  outline: none;
  color: blue;

  &::placeholder {
    color: blue;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
`;
export const FormBtn = styled.button`
  margin-bottom: 16px;
  background-color: blue;
  border: 1px solid blue;
  color: white;
  padding: 8px 30px;
  border-radius: 10px;
`;

export const BtnLink = styled(NavLink)`
  color: blue;
`;
