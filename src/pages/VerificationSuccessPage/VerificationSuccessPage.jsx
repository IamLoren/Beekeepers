import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectVerificationToken } from '../../redux/selectors';
import { verifyThunk } from '../../redux/auth/operations';

const VerificationSuccessPage = () => {
  const dispatch = useDispatch();
  const verificationToken = useSelector(selectVerificationToken);
  useEffect(() => {
    dispatch(verifyThunk(verificationToken));
  });
  return (
    <div>
      <h1>Verified!</h1>
      <p>You have successesfully verified account.</p>
      <Link to="/">Back To Homepage</Link>
    </div>
  );
};

export default VerificationSuccessPage;
