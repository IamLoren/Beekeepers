import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectColorTheme } from '../../redux/selectors';
import { refreshThunk } from '../../redux/auth/operations';

const ThemeClass = () => {
    const dispatch = useDispatch();
  const currentTheme = useSelector(selectColorTheme);

  useEffect(() => {
    const refreshTheme = async() => {
        try {
            await dispatch(refreshThunk);
             document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(currentTheme);
        } catch (error) {
            console.log(error)
        } 
    }
    refreshTheme()
  }, [currentTheme, dispatch]);

  return null;
};

export default ThemeClass;