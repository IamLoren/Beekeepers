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
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAvatarThunk,
  updateUserThunk,
} from '../../redux/auth/operations';
import { selectUser } from '../../redux/selectors';
import { toast } from 'react-toastify';
import { changeModalOpen, closeModals } from '../../redux/modals/modalsSlice';

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
  // const [photo, setPhoto] = useState(defaultPhoto);
  const { avatarURL, gender, name, email } = useSelector(selectUser);

  const dispatch = useDispatch();

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

  // example
  ////////////
  const onSubmit = (data) => {
    dispatch(updateUserThunk(data))
      .then(() => {
        toast.success('Profile updated successfully');
        dispatch(changeModalOpen(false));
        dispatch(closeModals(false));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <SettingContainer>
      <h1>Setting</h1>

      <FormWrapper
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        errors={errors}
      >
        <MainLabelText htmlFor="avatar">Your photo</MainLabelText>
        <PhotoWrapper>
          <img
            src={avatarURL ? avatarURL : defaultPhoto}
            alt="avatarURL"
            width="80"
            height="80"
          />

          {/* <UploadBtn onClick={handlePhotoUpload} register={register}> */}
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
            defaultValue={gender ? gender : 'woman'}
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
            defaultValue={name ? name : ''}
            placeholder="David"
            {...register('name')}
          />

          <MainLabelText htmlFor="email">E-mail</MainLabelText>
          <StyledInput
            id="email"
            type="text"
            name="email"
            defaultValue={email ? email : ''}
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
