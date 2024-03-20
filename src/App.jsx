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
import { useSelector } from 'react-redux';
import { selectIsLoading } from './redux/Global/selectors.jsx';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  const isRefresh = useSelector(selectIsRefresh);
  const isLoading = useSelector(selectIsLoading);

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
          <Route path="*" element={<ErrorPage />} />
        </Route>
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
      </Routes>
      <Loader visible={isLoading} />
    </>
  );
}
export default App;
