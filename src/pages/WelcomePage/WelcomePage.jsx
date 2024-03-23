import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';
import {
  StyledSvg,
  StyledFullPage,
  StyledLeftItem,
  WelcomeLiSpan,
  StyledButton,
  StyledLeftList,
  StyledRightWrapper,
  StyledRightItem,
  StyledRightList,
  StyledTitle1,
  StyledTitle2,
  StyledLeftTitle3,
  StyledRightTitle3,
} from './WelcomePage.styled';

const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <StyledFullPage>
        <div>
          <StyledTitle1>
            {t('welcomePage.Water consumption tracker')}
          </StyledTitle1>
          <StyledTitle2>
            {t('welcomePage.Record daily water intake and track')}
          </StyledTitle2>
          <StyledLeftTitle3>
            {t('welcomePage.Tracker Benefits')}
          </StyledLeftTitle3>
          <StyledLeftList>
            <StyledLeftItem>
              <StyledSvg>
                <use href={sprite + '#icon-calendar-day'}></use>
              </StyledSvg>
              <WelcomeLiSpan>{t('welcomePage.Habit drive')}</WelcomeLiSpan>
            </StyledLeftItem>
            <StyledLeftItem>
              <StyledSvg>
                <use href={sprite + '#icon-presentation-chart-bar'}></use>
              </StyledSvg>
              <WelcomeLiSpan>{t('welcomePage.View statistics')}</WelcomeLiSpan>
            </StyledLeftItem>
            <StyledLeftItem>
              <StyledSvg>
                <use href={sprite + '#icon-wrench-screwdriver'}></use>
              </StyledSvg>
              <WelcomeLiSpan>
                {t('welcomePage.Personal rate setting')}
              </WelcomeLiSpan>
            </StyledLeftItem>
          </StyledLeftList>

          <StyledButton onClick={handleClick}>
            {t('welcomePage.Try tracker')}
          </StyledButton>
        </div>
        <StyledRightWrapper>
          <StyledRightTitle3>
            {t('welcomePage.Why drink water')}
          </StyledRightTitle3>
          <StyledRightList>
            <StyledRightItem>
              {t('welcomePage.Supply of nutrients to all organs')}
            </StyledRightItem>
            <StyledRightItem>
              {t('welcomePage.Providing oxygen to the lungs')}
            </StyledRightItem>
            <StyledRightItem>
              {t('welcomePage.Maintaining the work of the heart')}
            </StyledRightItem>
            <StyledRightItem>
              {t('welcomePage.Release of processed substances')}
            </StyledRightItem>
            <StyledRightItem>
              {t(
                'welcomePage.Ensuring the stability of the internal environment'
              )}
            </StyledRightItem>
            <StyledRightItem>
              {t('welcomePage.Maintaining within the normal temperature')}
            </StyledRightItem>
            <StyledRightItem>
              {t(
                'welcomePage.Maintaining an immune system capable of resisting disease'
              )}
            </StyledRightItem>
          </StyledRightList>
        </StyledRightWrapper>
      </StyledFullPage>
    </>
  );
};

export default WelcomePage;
