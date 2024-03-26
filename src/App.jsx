import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignInPage from './pages/SignInPage/SignInPage.jsx';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import PublicRoute from './routesConfig/PublicRoute.jsx';
import PrivateRoute from './routesConfig/PrivateRoute.jsx';
import { selectIsRefresh } from './redux/selectors.js';
import Loader from './components/Loader/Loader.jsx';
import { selectIsLoading } from './redux/Global/selectors.jsx';
import { refreshThunk } from './redux/auth/operations.js';
import VerificationSuccessPage from './pages/VerificationSuccessPage/VerificationSuccessPage.jsx';

function App() {
  const isRefresh = useSelector(selectIsRefresh);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader visible={isLoading} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path="/verification"
            element={
              <PrivateRoute>
                <VerificationSuccessPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Loader visible={isLoading} />
    </>
  );
}
export default App;
