import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../../redux/selectors';

const ThemeClass = () => {
  const currentTheme = useSelector(selectColorTheme);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(currentTheme);
  }, [currentTheme]);

  return null;
};

export default ThemeClass;