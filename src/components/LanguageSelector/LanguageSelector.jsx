import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from '@mui/material';
import i18n from 'i18next';
import { LANGUAGES } from '../../Internationalization/i18n';
import { LanguageSelectorWrap } from './LanguageSelector.styled';
import { changeLanguageInState } from '../../redux/auth/authSlice';
import { selectLanguage } from '../../redux/selectors';
import { updateUserThunk } from '../../redux/auth/operations';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguage = (language) => {
    i18n.changeLanguage(language); 
    localStorage.setItem('i18nextLng', language);
    dispatch(changeLanguageInState(language));
    dispatch(updateUserThunk( {language} ));
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    console.log(currentLanguage)
    i18n.changeLanguage(currentLanguage);
    // const langLS = localStorage.getItem('i18nextLng');
    // if (langLS === "ua") {
    //   i18n.changeLanguage(LANGUAGES.UA);
    // } else if (langLS === "es") {
    //   i18n.changeLanguage(LANGUAGES.ES);
    // } else { i18n.changeLanguage(LANGUAGES.EN);}
   
    localStorage.setItem('i18nextLng', currentLanguage);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [currentLanguage]);

const lang = currentLanguage;

  return (
    <LanguageSelectorWrap ref={dropdownRef}>
      <button onClick={toggleDropdown}>{lang}</button>
      <Fade in={isOpen} timeout={500}>
        <div style={{ display: isOpen ? 'block' : 'none' }}>
          <ul>
            <li
              onClick={() => handleLanguage(LANGUAGES.EN)}
              disabled={currentLanguage === LANGUAGES.EN}
            >
              EN
            </li>
            <li
              onClick={() => handleLanguage(LANGUAGES.UA)}
              disabled={currentLanguage === LANGUAGES.UA}
            >
              UA
            </li>
            <li
              onClick={() => handleLanguage(LANGUAGES.ES)}
              disabled={currentLanguage === LANGUAGES.ES}
            >
              ES
            </li>
          </ul>
        </div>
      </Fade>
    </LanguageSelectorWrap>
  );
};

export default LanguageSelector;
