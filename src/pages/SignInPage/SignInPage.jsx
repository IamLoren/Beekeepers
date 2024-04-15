import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginThunk } from '../../redux/auth/operations';
import Container from '../../components/Container/Container';
import AuthForm from '../../components/AuthForm/AuthForm';
import PassEye from '../../assets/PassEye';
import Bottle from '../../assets/MobileBg/SignInBgMob.webp';
import BottleTablet from '../../assets/TabletBg/SignInBgTab.webp';
import BottleDesktop from '../../assets/DesktopBg/SignInBg.webp';
import OpenPassEye from '../../assets/OpenPassEye';
import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  ImgWrapper,
  BackgroundWrapper,
} from './SigninPage.styled';
import {
  FormBtn,
  FormInput,
  FormLabel,
  PassShowBtn,
} from '../../components/AuthForm/AuthForm.styled';
import i18n from '../../Internationalization/i18n';
import { selectLanguage } from '../../redux/selectors';

const SignInPage = () => {
  const currentLanguage = useSelector(selectLanguage);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [eyePass, setEyePass] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

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
        .max(64)
        .required(t('validPassword.Password is required')),
    })
    .required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  function submit(data) {
    dispatch(loginThunk(data))
      .unwrap()
      .then((res) => {
        toast.success(
          `Welcome ${res.user.name || res.user.email.split('@')[0]}`
        );
        navigate('/home');
      })
      .catch((err) => toast.error(err));
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  return (
    <BackgroundWrapper>
      <Container>
        <StyledSection>
          <LoginWrapper>
            <AuthForm
              on={true}
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
                  required
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
                  required
                  {...register('password')}
                />
                <ErrorSpan>{errors?.password?.message}</ErrorSpan>
                <PassShowBtn type="button" onClick={showPass}>
                  {eyePass ? <OpenPassEye /> : <PassEye />}
                </PassShowBtn>
              </FormLabel>
              <FormBtn type="submit">{t('signIn')}</FormBtn>
            </AuthForm>
            <ImgWrapper>
              {isMobile && <img src={Bottle} />}
              {isTablet && <img src={BottleTablet} />}
              {isDesktop && <img src={BottleDesktop} />}
            </ImgWrapper>
          </LoginWrapper>
        </StyledSection>
      </Container>
    </BackgroundWrapper>
  );
};

export default SignInPage;
