import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import sprite from '../../assets/sprite.svg';
import { selectPortions } from '../../redux/selectors';
import TodayListItem from '../TodayListItem/TodayListItem';
import {
  changeAddModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';
import {
  // fetchDailyPortionsThunk,
  fetchPortionsThunk,
} from '../../redux/statisticData/operations';

import {
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';

const TodayWaterList = () => {
  const dispatch = useDispatch();
  const portions = useSelector(selectPortions);
  // const today = new Date();
  // const day = String(today.getDate()).padStart(2, '0');
  // const month = String(today.getMonth() + 1).padStart(2, '0');
  // const year = today.getFullYear();
  // const formattedDate = `${day}.${month}.${year}`;

  useEffect(() => {
    dispatch(fetchPortionsThunk());
    // dispatch(fetchDailyPortionsThunk(formattedDate));
  }, [
    dispatch,
    // formattedDate
  ]);

  const sortedPortions = [...portions].sort((a, b) => {
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
      <TodayList>
        {sortedPortions.map(({ _id, amount, time }) => (
          <TodayListItem key={nanoid()} id={_id} amount={amount} time={time} />
        ))}
      </TodayList>
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
