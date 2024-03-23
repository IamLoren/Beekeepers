import { NavLink } from 'react-router-dom';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const { t } = useTranslation();
  return (
    <form>
      SignUpForm
      <NavLink to="/signin">{t('signIn')}</NavLink>
    </form>
  );
};

export default SignUpForm;
