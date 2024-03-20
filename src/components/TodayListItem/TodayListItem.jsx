import { useDispatch } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import {
  changeDeletePortionModal,
  changeEditPortionModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';
import { changeSelectedItem } from '../../redux/statisticData/statisticDataSlice';

import {
  ItemWrapper,
  ContentItemWrapper,
  AmountText,
  TimeText,
  ButtonsWrapper,
} from './TodayListItem.styled';
import { fetchDailyPortionsThunk } from '../../redux/statisticData/operations';

const TodayListItem = ({ id, amount, time }) => {
  const dispatch = useDispatch();

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const onEditPortionClick = () => {
    dispatch(changeSelectedItem({ id, amount, time }));
    dispatch(changeModalOpen(true));
    dispatch(changeEditPortionModal(true));
    dispatch(fetchDailyPortionsThunk(formattedDate));
  };

  const onDeletePortionClick = () => {
    dispatch(changeSelectedItem({ id, amount, time }));
    dispatch(changeModalOpen(true));
    dispatch(changeDeletePortionModal(true));
  };

  return (
    <ItemWrapper>
      <ContentItemWrapper>
        <svg width={17} height={22} fill="none">
          <use href={sprite + '#icon-glass'}></use>
        </svg>
        <AmountText>{amount} ml</AmountText>
        <TimeText>{time}</TimeText>
      </ContentItemWrapper>
      <ButtonsWrapper>
        <button className="edit" onClick={onEditPortionClick}>
          <svg width={16} height={16} fill="none">
            <use href={sprite + '#icon-pencil-square'}></use>
          </svg>
        </button>
        <button className="trash" onClick={onDeletePortionClick}>
          <svg width={16} height={16} fill="none">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default TodayListItem;
