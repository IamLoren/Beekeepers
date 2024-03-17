import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  ImgWrapper,
} from './SignInPage.styles';
import { useMediaQuery } from 'react-responsive';
import AuthForm from '../../components/AuthForm/AuthForm';
import {
  FormBtn,
  FormInput,
  FormLabel,
} from '../../components/AuthForm/AuthForm.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

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
      .max(64)
      .required('Password is required'),
  })
  .required();

const SignInPage = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  function submit(data) {
    console.log(data);
  }


  return (
    <StyledSection>
      <LoginWrapper>
        <AuthForm
          on={true}
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
              required
              {...register('email')}
            />
            <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          </FormLabel>
          <FormLabel>
            Enter your password
            <FormInput
              type='password'
              placeholder="Password"
              name="password"
              required
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
          </FormLabel>
          <FormBtn type="submit">Sign In</FormBtn>
        </AuthForm>
        <ImgWrapper>
          {/* {isMobile && <BottleImg />} */}
          {/* {isTablet && <BottleImgTablet />}
          {isDesktop && <BottleImgDesktop />} */}
        </ImgWrapper>
      </LoginWrapper>
    </StyledSection>
  );
};

export default SignInPage;
