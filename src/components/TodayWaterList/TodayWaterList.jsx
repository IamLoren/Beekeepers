import { useSelector } from 'react-redux';
import { selectPortions } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

import TodayListItem from '../TodayListItem/TodayListItem';
import {
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';

import sprite from '../../assets/sprite.svg';

const TodayWaterList = () => {
  const portions = useSelector(selectPortions);

  return (
    <div>
      <TodayListTitle>Today</TodayListTitle>
      <TodayList>
        {portions.map(({ amount, time }) => {
          return (
            <TodayListItem
              key={nanoid()}
              amount={amount}
              time={time}
            ></TodayListItem>
          );
        })}
      </TodayList>
      <TodayListButton>
        <svg width={16} height={16}>
          <use href={sprite + '#icon-plus-small'}></use>
        </svg>
        Add water
      </TodayListButton>
    </div>
  );
};

export default TodayWaterList;
