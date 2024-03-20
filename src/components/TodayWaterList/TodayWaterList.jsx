import {
  // useCallback,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import sprite from '../../assets/sprite.svg';
import {
  selectDailyPortions,
  // , selectPortions
} from '../../redux/selectors';
import TodayListItem from '../TodayListItem/TodayListItem';
import {
  changeAddModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';
import { fetchDailyPortionsThunk } from '../../redux/statisticData/operations';

import {
  NoPortionsText,
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';
import { formingTodayDate } from '../../serviceFunctions/serviceFunctions';

const TodayWaterList = () => {
  const dispatch = useDispatch();
  // const allPortions = useSelector(selectPortions);
  const dailyPortions = useSelector(selectDailyPortions);

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
      <TodayListTitle>Today</TodayListTitle>
      {dailyPortions.length !== 0 ? (
        <TodayList>
          {sortedPortions.map(({ id, amount, time }) => (
            <TodayListItem key={nanoid()} id={id} amount={amount} time={time} />
          ))}
        </TodayList>
      ) : (
        <NoPortionsText>No notes yet</NoPortionsText>
      )}
      <TodayListButton onClick={onAddPortionClick}>
        <svg width={16} height={16}>
          <use href={sprite + '#icon-plus-small'}></use>
        </svg>
        Add water
      </TodayListButton>
    </div>
  );
};

export default TodayWaterList;
