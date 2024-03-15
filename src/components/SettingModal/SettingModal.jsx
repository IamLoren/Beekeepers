import { Radio } from '@mui/material';
import sprite from '../../assets/sprite.svg';
import {
  LabelText,
  MainLabelText,
  PhotoWrapper,
  RadioGroupWrap,
  SaveBtn,
  StyledFormControlLabel,
  StyledInput,
  UploadBtn,
  Wrapper,
} from './SettingModal.styled';

const SettingModal = () => {
  return (
    <Wrapper>
      <h1>Setting</h1>

      <form>
        <MainLabelText>Your photo</MainLabelText>
        <PhotoWrapper>
          <img src="/" alt="avatar" width="80" height="80" />

          <UploadBtn>
            <svg className="arrow-up" fill="none" fontSize={24}>
              <use href={sprite + '#icon-arrow-up-try'}></use>
            </svg>
            Upload a photo
          </UploadBtn>
        </PhotoWrapper>

        <MainLabelText>Your gender identity</MainLabelText>
        <RadioGroupWrap defaultValue="woman" name="gender" row>
          <StyledFormControlLabel
            value="woman"
            control={<Radio />}
            label="Woman"
          ></StyledFormControlLabel>
          <StyledFormControlLabel
            value="man"
            control={<Radio />}
            label="Man"
          ></StyledFormControlLabel>
        </RadioGroupWrap>

        <label htmlFor="name">
          <MainLabelText>Your name</MainLabelText>
          <StyledInput id="name" type="text" placeholder="David" />
        </label>

        <label htmlFor="email">
          <MainLabelText>E-mail</MainLabelText>
          <StyledInput id="email" type="text" placeholder="david01@gmail.com" />
        </label>

        <MainLabelText>Password</MainLabelText>
        <label htmlFor="oldPassword">
          <LabelText>Outdated password:</LabelText>
          <StyledInput id="oldPassword" type="password" />
        </label>
        <label htmlFor="newPassword">
          <LabelText>New Password:</LabelText>
          <StyledInput id="newPassword" type="password" />
        </label>
        <label htmlFor="repeatPassword">
          <LabelText>Repeat new password:</LabelText>
          <StyledInput id="repeatPassword" type="password" />
        </label>
      </form>
      <SaveBtn type="submit">Save</SaveBtn>
    </Wrapper>
  );
};

export default SettingModal;
