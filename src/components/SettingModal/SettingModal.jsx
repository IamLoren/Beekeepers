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
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const basicSchema = yup.object({
  // name: yup.string().required('Name is required'),
  // email: yup
  //   .string()
  //   .email('Please write valid email')
  //   .matches(/^(?!.*@[^,]*,)/)
  //   .required('Email is required'),
  oldPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(64)
    .required('Password is required'),
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters!')
    .required('Password is required!'),
  repPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match!')
    .required('The field is required!'),
});

const SettingModal = () => {
  const [eyePass, setEyePass] = useState(false);
  const [photo, setPhoto] = useState(defaultPhoto);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(basicSchema),
  });

  // const inputChange = (e) => {
  //   formik.handleChange(e);
  // };

  // const changeGender = (e) => {
  //   formik.handleChange(e);
  // };

  // function submit({ ...data }) {
  //   console.log(data);
  // }

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

      <FormWrapper
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        errors={errors}
      >
        <MainLabelText htmlFor="photo">Your photo</MainLabelText>
        <PhotoWrapper>
          <img src={photo} alt="avatar" width="80" height="80" />

          <UploadBtn onClick={handlePhotoUpload} register={register}>
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
            // onChange={changeGender}
          >
            <StyledFormControlLabel
              value="woman"
              control={<Radio />}
              label="Woman"
              {...register('gender')}
              // checked={formik.values.gender === 'woman'}
            ></StyledFormControlLabel>

            <StyledFormControlLabel
              value="man"
              control={<Radio />}
              label="Man"
              {...register('gender')}
              // checked={formik.values.gender === 'man'}
            ></StyledFormControlLabel>
          </RadioGroupWrap>

          <MainLabelText htmlFor="name">Your name</MainLabelText>
          <StyledInput
            id="name"
            type="text"
            name="name"
            placeholder="David"
            {...register('name')}
          />

          <MainLabelText htmlFor="email">E-mail</MainLabelText>
          <StyledInput
            id="email"
            type="text"
            name="email"
            placeholder="david01@gmail.com"
            {...register('email')}
          />

          <MainLabelText htmlFor="password">Password</MainLabelText>

          <LabelText htmlFor="oldPassword">
            Outdated password:
            <StyledInput
              id="oldPassword"
              name="oldPassword"
              type={eyePass ? 'text' : 'password'}
              placeholder="Password"
              {...register('oldPassword')}
            />
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>

          <LabelText htmlFor="newPassword">
            New Password:
            <StyledInput
              id="newPassword"
              type={eyePass ? 'text' : 'password'}
              name="newPassword"
              placeholder="Password"
              {...register('newPassword')}
            />
            <ErrMessage>{errors.newPassword?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>

          <LabelText htmlFor="repeatPassword">
            Repeat new password:
            <StyledInput
              id="repeatPassword"
              type={eyePass ? 'text' : 'password'}
              name="repPassword"
              placeholder="Password"
              {...register('repPassword')}
            />
            <ErrMessage>{errors.repPassword?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>
        </MainInfoWrapper>
      </FormWrapper>
      <SaveBtn type="submit">Save</SaveBtn>
    </SettingContainer>
  );
};

export default SettingModal;
