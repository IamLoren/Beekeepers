import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { selectIsLogged } from '../../redux/selectors';
import { selectLanguage } from '../../redux/Global/selectors';
import i18n, { LANGUAGES } from '../../Internationalization/i18n';
import { setLanguage } from '../../redux/Global/globalSlice';
import { LngLogoutWrap, StyledBox, StyledWrapper } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsLogged);
  const language = useSelector(selectLanguage);
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
  return (
    <header>
      <Container>
        <StyledWrapper>
          <Logo />
          <LngLogoutWrap>
            <LanguageSelector
              checked={languageActive}
              onChange={onLanguageChange}
            />
            <StyledBox>
              {isAuthenticated ? <UserLogo /> : <UserAuth />}
            </StyledBox>
          </LngLogoutWrap>
        </StyledWrapper>
      </Container>
    </header>
  );
};
