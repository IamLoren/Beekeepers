import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i18n, { LANGUAGES } from '../../Internationalization/i18n';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { selectColorTheme, selectIsLogged } from '../../redux/selectors';
import { selectLanguage } from '../../redux/Global/selectors';
import { setLanguage } from '../../redux/Global/globalSlice';
import { changeUserTheme } from '../../redux/auth/authSlice';
import { updateUserThunk } from '../../redux/auth/operations';
import { LngLogoutWrap, StyledBox, StyledWrapper } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsLogged);
  const language = useSelector(selectLanguage);
  const theme = useSelector(selectColorTheme);
  const [languageActive, setLanguageActive] = useState(false);

  useEffect(() => {
    setLanguageActive(language === LANGUAGES.EN);
    i18n.changeLanguage(language);
  }, [language]);

  const onLanguageChange = (e) => {
    let selectedLanguage;
    if (e.target.value === 'en') {
      selectedLanguage = LANGUAGES.EN;
    } else if (e.target.value === 'uk') {
      selectedLanguage = LANGUAGES.UK;
    } else {
      selectedLanguage = LANGUAGES.ES;
    }
    dispatch(setLanguage(selectedLanguage));
  };

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    dispatch(changeUserTheme(newTheme));
    dispatch(updateUserThunk({ theme: newTheme }));
  };

  return (
    <header>
      <Container>
        <StyledWrapper>
          <Logo />
          <div>
            <LanguageSelector
              checked={languageActive}
              onChange={onLanguageChange}
            />
            {isAuthenticated && (
              <ThemeToggler onClick={changeTheme}></ThemeToggler>
            )}
          </div>
          <LngLogoutWrap>
            <StyledBox>
              {isAuthenticated ? <UserLogo /> : <UserAuth />}
            </StyledBox>
          </LngLogoutWrap>
        </StyledWrapper>
      </Container>
    </header>
  );
};
