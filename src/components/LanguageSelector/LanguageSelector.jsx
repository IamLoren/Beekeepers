import i18n from 'i18next';
import { useState } from 'react';
import { LanguageSelectorWrap } from './LanguageSelector.styled';
import { LANGUAGES } from '../../Internationalization/i18n';

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };
  return (
    <LanguageSelectorWrap>
      <button
        disabled={currentLanguage === LANGUAGES.EN}
        onClick={() => changeLanguage(LANGUAGES.EN)}
      >
        EN
      </button>
      <button
        disabled={currentLanguage === LANGUAGES.UA}
        onClick={() => changeLanguage(LANGUAGES.UA)}
      >
        UA
      </button>
      <button
        disabled={currentLanguage === LANGUAGES.ES}
        onClick={() => changeLanguage(LANGUAGES.ES)}
      >
        ES
      </button>
    </LanguageSelectorWrap>
  );
};
export default LanguageSelector;
