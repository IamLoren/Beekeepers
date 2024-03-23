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
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      <h1>{t('settingModal.Setting')}</h1>

      <FormWrapper
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        errors={errors}
      >
        <MainLabelText htmlFor="photo">
          {t('settingModal.Your photo')}
        </MainLabelText>
        <PhotoWrapper>
          <img src={photo} alt="avatar" width="80" height="80" />

          <UploadBtn onClick={handlePhotoUpload} register={register}>
            <svg className="arrow-up" fill="none" fontSize={24}>
              <use href={sprite + '#icon-arrow-up-try'}></use>
            </svg>
            {t('settingModal.Upload a photo')}
          </UploadBtn>
        </PhotoWrapper>

        <MainInfoWrapper>
          <MainLabelText htmlFor="gender">
            {t('settingModal.Your gender identity')}
          </MainLabelText>
          <RadioGroupWrap
            defaultValue="woman"
            name="gender"
            row
            // onChange={changeGender}
          >
            <StyledFormControlLabel
              value="woman"
              control={<Radio />}
              label={t('woman')}
              {...register('gender')}
              // checked={formik.values.gender === 'woman'}
            ></StyledFormControlLabel>

            <StyledFormControlLabel
              value="man"
              control={<Radio />}
              label={t('man')}
              {...register('gender')}
              // checked={formik.values.gender === 'man'}
            ></StyledFormControlLabel>
          </RadioGroupWrap>

          <MainLabelText htmlFor="name">
            {t('settingModal.Your name')}
          </MainLabelText>
          <StyledInput
            id="name"
            type="text"
            name="name"
            placeholder="David"
            {...register('name')}
          />

          <MainLabelText htmlFor="email">{t('email')}</MainLabelText>
          <StyledInput
            id="email"
            type="text"
            name="email"
            placeholder="david01@gmail.com"
            {...register('email')}
          />

          <MainLabelText htmlFor="password">{t('password')}</MainLabelText>

          <LabelText htmlFor="oldPassword">
            {t('settingModal.Outdated password')}:
            <StyledInput
              id="oldPassword"
              name="oldPassword"
              type={eyePass ? 'text' : 'password'}
              placeholder={t('password')}
              {...register('oldPassword')}
            />
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>

          <LabelText htmlFor="newPassword">
            {t('settingModal.New Password')}:
            <StyledInput
              id="newPassword"
              type={eyePass ? 'text' : 'password'}
              name="newPassword"
              placeholder={t('password')}
              {...register('newPassword')}
            />
            <ErrMessage>{errors.newPassword?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>

          <LabelText htmlFor="repeatPassword">
            {t('settingModal.Repeat new password')}:
            <StyledInput
              id="repeatPassword"
              type={eyePass ? 'text' : 'password'}
              name="repPassword"
              placeholder={t('password')}
              {...register('repPassword')}
            />
            <ErrMessage>{errors.repPassword?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>
        </MainInfoWrapper>
      </FormWrapper>
      <SaveBtn type="submit">{t('save')}</SaveBtn>
    </SettingContainer>
  );
};

export default SettingModal;
