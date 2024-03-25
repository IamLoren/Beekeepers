import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';

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
