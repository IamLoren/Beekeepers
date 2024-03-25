import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  ImgWrapper,
  BackgroundWrapper
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
import { toast } from 'react-toastify';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Bottle from '../../assets/MobileBg/SignInBgMob.webp';
import BottleTablet from '../../assets/TabletBg/SignInBgTab.webp';
import BottleDesktop from '../../assets/DesktopBg/SignInBg.webp';
import PassEye from '../../assets/PassEye';
import OpenPassEye from '../../assets/OpenPassEye';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [eyePass, setEyePass] = useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const schema = yup
    .object({
      email: yup
        .string()
        .email(t('validEmail.Please write valid email'))
        .matches(/^(?!.*@[^,]*,)/)
        .required(t('validEmail.Email is required')),
      password: yup
        .string()
        .min(8, t('validPassword.Password must be at least 8 characters'))
        .required(t('validPassword.Password is required')),
      repPassword: yup
        .string()
        .min(8, t('validPassword.Password must be at least 8 characters'))
        .oneOf(
          [yup.ref('password')],
          t("validPassword.Passwords don't match, please try again")
        )
        .required(t('validPassword.Password is required')),
    })
    .required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  function submit({ email, password }) {
    dispatch(registerThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('Sign up done!\nPlease verify email!');
        // navigate('/signin');
      })

      .catch(() => toast.error('Ooops... Something went wrong!'));
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  return (
    <BackgroundWrapper>
      <StyledSection>
      <LoginWrapper>
        <AuthForm
          on={false}
          handleSubmit={handleSubmit}
          submit={submit}
          errors={errors}
        >
          <FormLabel>
            {t('enterEmail')}
            <FormInput
              type="text"
              placeholder={t('email')}
              name="email"
              {...register('email')}
            />
            <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          </FormLabel>
          <FormLabel>
            {t('enterPassword')}
            <FormInput
              type={eyePass ? 'text' : 'password'}
              placeholder={t('password')}
              name="password"
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </FormLabel>
          <FormLabel>
            {t('repeatPassword')}
            <FormInput
              type={eyePass ? 'text' : 'password'}
              placeholder={t('repeatPassword')}
              name="repPassword"
              {...register('repPassword')}
            />
            <ErrorSpan>{errors?.repPassword?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </FormLabel>
          <FormBtn type="submit"> {t('signUp')}</FormBtn>
        </AuthForm>
        <ImgWrapper>
          {isMobile && <img src={Bottle} />}
          {isTablet && <img src={BottleTablet} />}
          {isDesktop && <img src={BottleDesktop} />}
        </ImgWrapper>
      </LoginWrapper>
    </StyledSection>
    </BackgroundWrapper>
  );
};

export default SignUpPage;
