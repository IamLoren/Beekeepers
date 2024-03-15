import { useDispatch, useSelector } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import { selectPortions } from '../../redux/selectors';
import TodayListItem from '../TodayListItem/TodayListItem';
import {
  changeAddModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';

import {
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';

const TodayWaterList = () => {
  const dispatch = useDispatch();

  const portions = useSelector(selectPortions);

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
        {sortedPortions.map(({ id, amount, time }) => (
          <TodayListItem key={id} id={id} amount={amount} time={time} />
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
