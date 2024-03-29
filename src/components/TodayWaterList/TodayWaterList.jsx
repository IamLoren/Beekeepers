import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import sprite from '../../assets/sprite.svg';
import TodayListItem from '../TodayListItem/TodayListItem';
import { selectDailyPortions } from '../../redux/selectors';
import {
  changeAddModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';
import { fetchDailyPortionsThunk } from '../../redux/statisticData/operations';
import { formingTodayDate } from '../../serviceFunctions/serviceFunctions';
import {
  NoPortionsText,
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';

const TodayWaterList = () => {
  const dispatch = useDispatch();
  const dailyPortions = useSelector(selectDailyPortions);
  const { t } = useTranslation();

  useEffect(() => {
    const today = new Date();
    dispatch(fetchDailyPortionsThunk(formingTodayDate(today)));
  }, [dispatch]);

  const sortedPortions = [...dailyPortions].sort((a, b) => {
    const timeA = new Date(`1970/01/01 ${a.time}`).getTime();
    const timeB = new Date(`1970/01/01 ${b.time}`).getTime();
    return timeA - timeB;
  });

  const onAddPortionClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddModal(true));
  };

  return (
    <div>
      <TodayListTitle>{t('today')}</TodayListTitle>
      {dailyPortions.length !== 0 ? (
        <TodayList>
          {sortedPortions.map(({ id, amount, time }) => (
            <TodayListItem key={nanoid()} id={id} amount={amount} time={time} />
          ))}
        </TodayList>
      ) : (
        <NoPortionsText>{t('todayWaterList.No notes yet')}</NoPortionsText>
      )}
      <TodayListButton onClick={onAddPortionClick}>
        <svg width={16} height={16}>
          <use href={sprite + '#icon-plus-small'}></use>
        </svg>
        {t('addWater')}
      </TodayListButton>
    </div>
  );
};

export default TodayWaterList;
