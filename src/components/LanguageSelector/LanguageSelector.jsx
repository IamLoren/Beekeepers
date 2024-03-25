import { useEffect, useRef, useState } from 'react';
import { Fade } from '@mui/material';
import i18n from 'i18next';
import { LANGUAGES } from '../../Internationalization/i18n';
import { LanguageSelectorWrap } from './LanguageSelector.styled';

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
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
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <LanguageSelectorWrap ref={dropdownRef}>
      <button onClick={toggleDropdown}>{currentLanguage}</button>
      <Fade in={isOpen} timeout={500}>
        <div style={{ display: isOpen ? 'block' : 'none' }}>
          <ul>
            <li
              onClick={() => changeLanguage(LANGUAGES.EN)}
              disabled={currentLanguage === LANGUAGES.EN}
            >
              EN
            </li>
            <li
              onClick={() => changeLanguage(LANGUAGES.UA)}
              disabled={currentLanguage === LANGUAGES.UA}
            >
              UA
            </li>
            <li
              onClick={() => changeLanguage(LANGUAGES.ES)}
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
