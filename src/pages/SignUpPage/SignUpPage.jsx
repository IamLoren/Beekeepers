import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  ImgWrapper,
} from '../SignInPage/SigninPage.styled';
import {
  FormBtn,
  FormInput,
  FormLabel,
  PassShowBtn,
} from '../../components/AuthForm/AuthForm.styled';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


import AuthForm from '../../components/AuthForm/AuthForm';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';;


import Bottle from '../../assets/MobileBg/SignInBgMob.webp';
import BottleTablet from '../../assets/TabletBg/SignInBgTab.webp';
import BottleDesktop from '../../assets/DesktopBg/SignInBg.webp';
import PassEye from '../../assets/PassEye';
import OpenPassEye from '../../assets/OpenPassEye';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please write valid email')
      .matches(/^(?!.*@[^,]*,)/)
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    repPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .oneOf([yup.ref('password')], "Passwords don't match, please try again.")
      .required('Password is required'),
  })
  .required('Required');

const SignUpPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [eyePass, setEyePass] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  function submit({ email, password }) {
    dispatch(registerThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('Sign up done!\nPlease login!');
        navigate('/signin');
      })

      .catch(() => toast.error('Ooops... Something went wrong!'));
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthForm
          on={false}
          handleSubmit={handleSubmit}
          submit={submit}
          errors={errors}
        >
          <FormLabel>
            Enter your email
            <FormInput
              type="text"
              placeholder="E-mail"
              name="email"
              {...register('email')}
            />
            <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          </FormLabel>
          <FormLabel>
            Enter your password
            <FormInput
              type={eyePass ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </FormLabel>
          <FormLabel>
            Repeat password
            <FormInput
              type={eyePass ? 'text' : 'password'}
              placeholder="Repeat password"
              name="repPassword"
              {...register('repPassword')}
            />
            <ErrorSpan>{errors?.repPassword?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </FormLabel>
          <FormBtn type="submit">Sign Up</FormBtn>
        </AuthForm>
        <ImgWrapper>
          {isMobile && <img src={Bottle} />}
          {isTablet && <img src={BottleTablet} />}
          {isDesktop && <img src={BottleDesktop}  />}
        </ImgWrapper>
      </LoginWrapper>
    </StyledSection>
  );
};

export default SignUpPage;
