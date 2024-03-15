import { useDispatch } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import {
  ItemWrapper,
  ContentItemWrapper,
  AmountText,
  TimeText,
  ButtonsWrapper,
} from './TodayListItem.styled';
import {
  changeModalOpen,
  changeEditPortionModal,
  changeDeletePortionModal,
} from '../../redux/normaCounter/normaCounterSlice';

const TodayListItem = ({ id, amount, time, showModal }) => {
  const dispatch = useDispatch();

  const onEditPortionClick = () => {
    showModal({ id, amount, time });
    dispatch(changeModalOpen(true));
    dispatch(changeEditPortionModal(true));
  };

  const onDeletePortionClick = () => {
    showModal({ id });
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
