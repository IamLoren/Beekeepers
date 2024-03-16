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
  ErrMessage,
} from './SettingModal.styled';
import EyePassButton from './EyePassBtn';
import defaultPhoto from '../../assets/avatar.jpg';
import { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const basicSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters!')
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('The field is required!'),
  // name: yup.string().required('Name is required!'),
  // email: yup
  //   .string()
  //   .email('Please enter a valid email!')
  //   .required('Email is required!'),
});

const SettingModal = () => {
  const formik = useFormik({
    initialValues: {
      // user: {
      //   email: '',
      //   name: '',
      // },
      photo: '',
      gender: 'woman',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors } = formik;

  const inputChange = (e) => {
    formik.handleChange(e);
  };

  const [eyePass, setEyePass] = useState(false);
  const [photo, setPhoto] = useState(defaultPhoto);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('bam');
  };

  const changeGender = (e) => {
    formik.handleChange(e);
  };

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  const handlePhotoUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhoto(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <SettingContainer>
      <h1>Setting</h1>

      <FormWrapper onSubmit={handleSubmit}>
        <MainLabelText htmlFor="photo">Your photo</MainLabelText>
        <PhotoWrapper>
          <img src={photo} alt="avatar" width="80" height="80" />

          <UploadBtn onClick={handlePhotoUpload}>
            <svg className="arrow-up" fill="none" fontSize={24}>
              <use href={sprite + '#icon-arrow-up-try'}></use>
            </svg>
            Upload a photo
          </UploadBtn>
        </PhotoWrapper>

        <MainInfoWrapper>
          <MainLabelText htmlFor="gender">Your gender identity</MainLabelText>
          <RadioGroupWrap
            defaultValue="woman"
            name="gender"
            row
            onChange={changeGender}
          >
            <StyledFormControlLabel
              value="woman"
              control={<Radio />}
              label="Woman"
              checked={formik.values.gender === 'woman'}
            ></StyledFormControlLabel>

            <StyledFormControlLabel
              value="man"
              control={<Radio />}
              label="Man"
              checked={formik.values.gender === 'man'}
            ></StyledFormControlLabel>
          </RadioGroupWrap>

          <MainLabelText htmlFor="name">Your name</MainLabelText>
          <StyledInput
            id="name"
            type="text"
            name="name"
            placeholder="David"
            onChange={inputChange}
          />

          <MainLabelText htmlFor="email">E-mail</MainLabelText>
          <StyledInput
            id="email"
            type="text"
            name="email"
            placeholder="david01@gmail.com"
            onChange={inputChange}
          />

          <MainLabelText htmlFor="password">Password</MainLabelText>

          <LabelText htmlFor="oldPassword">
            Outdated password:
            <StyledInput
              id="oldPassword"
              type={eyePass ? 'text' : 'password'}
              placeholder="Password"
              onChange={inputChange}
            />
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>

          <LabelText htmlFor="newPassword">
            New Password:
            <StyledInput
              id="newPassword"
              type={eyePass ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={inputChange}
            />
            <ErrMessage>{errors.password?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>

          <LabelText htmlFor="repeatPassword">
            Repeat new password:
            <StyledInput
              id="repeatPassword"
              type={eyePass ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Password"
              onChange={inputChange}
            />
            <ErrMessage>{errors.confirmPassword?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>
        </MainInfoWrapper>
      </FormWrapper>
      <SaveBtn type="submit">Save</SaveBtn>
    </SettingContainer>
  );
};

export default SettingModal;
