import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectVerificationToken } from '../../redux/selectors';
import { verifyThunk } from '../../redux/auth/operations';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const VerificationSuccessPage = () => {
  const dispatch = useDispatch();
  const verificationToken = useSelector(selectVerificationToken);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(verifyThunk(verificationToken));
  });
  return (
    <div>
      <h1>{t('validEmail.Verified')}!</h1>
      <p>{t('validEmail.You have successfully verified your account')}.</p>
      <Link to="/">{t('validEmail.Back to Homepage')}</Link>
    </div>
  );
};

export default VerificationSuccessPage;
