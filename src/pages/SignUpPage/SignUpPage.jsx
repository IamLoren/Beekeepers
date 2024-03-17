import { useMediaQuery } from 'react-responsive';
import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  ImgWrapper,
} from '../SignInPage/SignInPage.styles';
import AuthForm from '../../components/AuthForm/AuthForm';
import {
  FormBtn,
  FormInput,
  FormLabel,
} from '../../components/AuthForm/AuthForm.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  function submit(data) {
    console.log(data);
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
              type='password'
              placeholder="Password"
              name="password"
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
          </FormLabel>
          <FormLabel>
            Repeat password
            <FormInput
              type={'password'}
              placeholder="Repeat password"
              name="repPassword"
              {...register('repPassword')}
            />
            <ErrorSpan>{errors?.repPassword?.message}</ErrorSpan>
          </FormLabel>
          <FormBtn type="submit">Sign Up</FormBtn>
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

export default SignUpPage;
