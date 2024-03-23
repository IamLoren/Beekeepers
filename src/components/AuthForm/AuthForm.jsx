import { FormWrapper, FormHeading, BtnLink, FormEl } from './AuthForm.styled';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const AuthForm = ({ children, on, handleSubmit, submit, errors }) => {
  const { t } = useTranslation();
  const path = on ? `/signup` : '/signin';
  return (
    <FormWrapper>
      <FormHeading>{on ? t('signIn') : t('signUp')}</FormHeading>
      <FormEl
        onSubmit={handleSubmit(submit)}
        $errorEmail={errors?.email}
        $errorPassword={errors?.password}
        $errorRepPassword={errors?.repPassword}
      >
        {children}
      </FormEl>
      <BtnLink to={path}>{on ? t('signUp') : t('signIn')}</BtnLink>
    </FormWrapper>
  );
};

export default AuthForm;
