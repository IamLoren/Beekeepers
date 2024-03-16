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
  SettingContainer,
  FormWrapper,
  MainInfoWrapper,
} from './SettingModal.styled';

const SettingModal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('bam');
  };
  return (
    <SettingContainer>
      <h1>Setting</h1>

      <FormWrapper onSubmit={handleSubmit}>
        <MainLabelText htmlFor="photo">Your photo</MainLabelText>
        <PhotoWrapper>
          <img src="/" alt="avatar" width="80" height="80" />

          <UploadBtn>
            <svg className="arrow-up" fill="none" fontSize={24}>
              <use href={sprite + '#icon-arrow-up-try'}></use>
            </svg>
            Upload a photo
          </UploadBtn>
        </PhotoWrapper>

        <MainInfoWrapper>
          <MainLabelText htmlFor="gender">Your gender identity</MainLabelText>
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

          <MainLabelText htmlFor="name">Your name</MainLabelText>
          <StyledInput id="name" type="text" placeholder="David" />

          <MainLabelText htmlFor="email">E-mail</MainLabelText>
          <StyledInput id="email" type="text" placeholder="david01@gmail.com" />

          <MainLabelText htmlFor="password">Password</MainLabelText>

          <LabelText htmlFor="oldPassword">Outdated password:</LabelText>
          <StyledInput id="oldPassword" type="password" />
          <LabelText htmlFor="newPassword">New Password:</LabelText>
          <StyledInput id="newPassword" type="password" />
          <LabelText htmlFor="repeatPassword">Repeat new password:</LabelText>
          <StyledInput id="repeatPassword" type="password" />
        </MainInfoWrapper>
      </FormWrapper>
      <SaveBtn type="submit">Save</SaveBtn>
    </SettingContainer>
  );
};

export default SettingModal;
