import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import sprite from '../../assets/sprite.svg';
import defaultPhoto from '../../assets/avatar.jpg';
import EyePassButton from './EyePassBtn';
import {
  updateAvatarThunk,
  updateUserThunk,
} from '../../redux/auth/operations';
import { selectUser } from '../../redux/selectors';
import { changeModalOpen, closeModals } from '../../redux/modals/modalsSlice';
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
  StyledImg,
  TitleSwitcherWrap,
} from './SettingModal.styled';

const SettingModal = () => {
  const [eyePass, setEyePass] = useState(false);
  const { t } = useTranslation();
  const { avatarURL, gender, name, email } = useSelector(selectUser);

  const dispatch = useDispatch();
  const basicSchema = yup
    .object({
      name: yup.string(),
      email: yup
        .string()
        .email(t('validEmail.Please write valid email'))
        .matches(/^(?!.*@[^,]*,)/),
      oldPassword: yup
        .string()
        .nullable()
        .test(
          'minLength',
          t('validPassword.Password must be at least 8 characters'),
          (value) => {
            if (!value) return true;
            return value.length >= 8;
          }
        )
        .max(64),
      newPassword: yup
        .string()
        .nullable()
        .test(
          'minLength',
          t('validPassword.Password must be at least 8 characters'),
          (value) => {
            if (!value) return true;
            return value.length >= 8;
          }
        ),
      repPassword: yup
        .string()
        .nullable()
        .oneOf(
          [yup.ref('newPassword'), null],
          t('validPassword.Passwords must match')
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: gender,
    },
    mode: 'onChange',
    resolver: yupResolver(basicSchema),
  });

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('avatarURL', file);

        dispatch(updateAvatarThunk(formData));
      }
    };
    input.click();
  };

  const onSubmit = ({ gender, email, name, oldPassword, newPassword }) => {
    const userData = {
      gender,
      email,
      name,
    };
    if (oldPassword) {
      userData.oldPassword = oldPassword;
      userData.newPassword = newPassword;
    }
    if (newPassword && !oldPassword) {
      toast.error('Please enter a outdated password');
      return;
    }

    dispatch(updateUserThunk(userData)).then((response) => {
      if (response.error) {
        toast.error(response.error.message);
      } else {
        toast.success('Profile updated successfully');
        dispatch(changeModalOpen(false));
        dispatch(closeModals(false));
      }
    });
  };

  return (
    <SettingContainer>
      <TitleSwitcherWrap>
        <h1>{t('setting')}</h1>
      </TitleSwitcherWrap>
      <FormWrapper
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        errors={errors}
      >
        <MainLabelText htmlFor="avatar">
          {' '}
          {t('settingModal.Your photo')}
        </MainLabelText>
        <PhotoWrapper>
          <StyledImg
            src={avatarURL ? avatarURL : defaultPhoto}
            alt="avatarURL"
            width="80"
            height="80"
          />

          <UploadBtn onClick={handlePhotoUpload}>
            <svg className="arrow-up" fill="none" fontSize={24}>
              <use href={sprite + '#icon-arrow-up-try'}></use>
            </svg>
            {t('settingModal.Upload a photo')}
          </UploadBtn>
        </PhotoWrapper>

        <MainInfoWrapper>
          <MainLabelText htmlFor="gender">
            {' '}
            {t('settingModal.Your gender identity')}
          </MainLabelText>
          <RadioGroupWrap
            defaultValue={gender ? gender : 'man'}
            name="gender"
            row
          >
            <StyledFormControlLabel
              value="woman"
              control={<Radio />}
              label={t('woman')}
              {...register('gender')}
            ></StyledFormControlLabel>

            <StyledFormControlLabel
              value="man"
              control={<Radio />}
              label={t('man')}
              {...register('gender')}
            ></StyledFormControlLabel>
          </RadioGroupWrap>

          <MainLabelText htmlFor="name">
            {' '}
            {t('settingModal.Your name')}
          </MainLabelText>
          <StyledInput
            id="name"
            type="text"
            name="name"
            defaultValue={
              name
                ? name
                : email.split('@')[0].charAt(0).toUpperCase() +
                  email.split('@')[0].slice(1)
            }
            placeholder="Enter your name"
            {...register('name')}
          />

          <MainLabelText htmlFor="email">{t('email')}</MainLabelText>
          <StyledInput
            id="email"
            type="text"
            name="email"
            defaultValue={email ? email : ''}
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

          <LabelText htmlFor="repPassword">
            {t('settingModal.Repeat new password')}:
            <StyledInput
              id="repPassword"
              type={eyePass ? 'text' : 'password'}
              name="repPassword"
              placeholder={t('password')}
              {...register('repPassword')}
            />
            <ErrMessage>{errors.repPassword?.message}</ErrMessage>
            <EyePassButton onClick={showPass} eyePass={eyePass} />
          </LabelText>
        </MainInfoWrapper>
        <SaveBtn type="submit">{t('save')}</SaveBtn>
      </FormWrapper>
    </SettingContainer>
  );
};

export default SettingModal;
